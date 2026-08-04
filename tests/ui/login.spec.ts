import { HomePage } from "../../page/HomePage";
import test, { expect } from "@playwright/test";
import { LoginPage } from "../../page/LoginPage";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  page,
}) => {
  const account = "testing142";
  const password = "testing142";

  await page.goto("/");

  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  homePage.getTopBarComponent().navigateToLoginPage();

  await loginPage.enterAccountInput(account);

  await loginPage.enterPasswordInput(password);

  await loginPage.clickLoginButton();

  const successLbl = page.getByRole("heading", {
    name: "Đăng nhập thành công",
  });
  await expect(successLbl).toBeVisible();
});
