import { Reporter, TestCase, TestResult } from "@playwright/test/reporter";
import * as https from "https";

export default class JiraReporter implements Reporter {
  private jiraDomain = process.env.JIRA_DOMAIN || "phungdung5846b.atlassian.net";
  private jiraEmail = process.env.JIRA_EMAIL || "";
  private jiraToken = process.env.JIRA_API_TOKEN || "";
  private projectKey = process.env.JIRA_PROJECT_KEY || "KAN";

  async onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === "failed" || result.status === "timedOut") {
      if (process.env.JIRA_AUTO_LOG !== "true") {
        return;
      }
      if (!this.jiraEmail || !this.jiraToken) {
        console.log(`[JiraReporter] Test "${test.title}" FAILED. Set JIRA_EMAIL and JIRA_API_TOKEN env vars to auto-create Bug tickets on Jira.`);
        return;
      }

      console.log(`[JiraReporter] Automatically logging bug to Jira for failed test: "${test.title}"...`);
      await this.logBugToJira(test, result);
    }
  }

  private async logBugToJira(test: TestCase, result: TestResult) {
    const summary = `[Auto-Bug] ${test.title}`;
    const errorMessage = result.error ? (result.error.message || String(result.error.value)) : "Test timed out or failed without explicit error message.";
    const fileLocation = `${test.location.file}:${test.location.line}`;

    const descriptionText = `Automated Test Failure Detected by Playwright:\n\n` +
      `• Test Title: ${test.title}\n` +
      `• Spec Location: ${fileLocation}\n` +
      `• Duration: ${result.duration} ms\n\n` +
      `• Error Log:\n${errorMessage.slice(0, 1000)}`;

    const auth = Buffer.from(`${this.jiraEmail}:${this.jiraToken}`).toString("base64");

    const postData = JSON.stringify({
      fields: {
        project: { key: this.projectKey },
        summary: summary,
        description: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: descriptionText }]
            }
          ]
        },
        issuetype: { name: "Bug" }
      }
    });

    return new Promise((resolve) => {
      const options = {
        hostname: this.jiraDomain,
        path: "/rest/api/3/issue",
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(postData)
        }
      };

      const req = https.request(options, (res) => {
        let body = "";
        res.on("data", (chunk) => body += chunk);
        res.on("end", () => {
          if (res.statusCode === 201) {
            const data = JSON.parse(body);
            console.log(`\n[JIRA REPORTER SUCCESS] 🎯 Created Bug Ticket ${data.key} on Jira for "${test.title}"`);
          } else {
            console.log(`\n[JIRA REPORTER FAILED] (${res.statusCode}): ${body}`);
          }
          resolve(true);
        });
      });

      req.on("error", (e) => {
        console.error(`[JIRA REPORTER ERROR]: ${e.message}`);
        resolve(false);
      });

      req.write(postData);
      req.end();
    });
  }
}
