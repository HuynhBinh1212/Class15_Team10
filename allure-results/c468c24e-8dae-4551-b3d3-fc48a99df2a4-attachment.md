# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> I_01: Kiểm tra chức năng Quên mật khẩu
- Location: tests\ui\login.spec.ts:37:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText(/Quên mật khẩu/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - img "Logo" [ref=e9]
      - generic [ref=e10]:
        - heading "Lịch Chiếu" [level=4] [ref=e12] [cursor=pointer]
        - heading "Cụm Rạp" [level=4] [ref=e14] [cursor=pointer]
        - heading "Tin Tức" [level=4] [ref=e16] [cursor=pointer]
        - heading "Ứng Dụng" [level=4] [ref=e18] [cursor=pointer]
      - generic [ref=e19]:
        - link [ref=e20] [cursor=pointer]:
          - /url: /sign-in
          - heading "Đăng Nhập" [level=3] [ref=e23]
        - separator [ref=e24]
        - link [ref=e25] [cursor=pointer]:
          - /url: /sign-up
          - heading "Đăng Ký" [level=3] [ref=e28]
  - main [ref=e31]:
    - generic [ref=e32]:
      - heading "Đăng nhập" [level=1] [ref=e36]
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic:
            - text: Tài Khoản
            - generic [aria-hidden]: "*"
          - generic [ref=e39]:
            - textbox "Tài Khoản" [ref=e40]
            - group [aria-hidden]
        - generic [ref=e41]:
          - generic:
            - text: Mật Khẩu
            - generic [aria-hidden]: "*"
          - generic [ref=e42]:
            - textbox "Mật Khẩu" [ref=e43]
            - button [ref=e45] [cursor=pointer]
            - group [aria-hidden]
        - generic [ref=e49] [cursor=pointer]:
          - checkbox "Nhớ tài khoản" [ref=e52]
          - generic [ref=e55]: Nhớ tài khoản
        - button "Đăng nhập" [ref=e56] [cursor=pointer]
        - link [ref=e60] [cursor=pointer]:
          - /url: /sign-up
          - heading "Bạn chưa có tài khoản? Đăng ký" [level=3] [ref=e61]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { CommonPage } from "./CommonPage";
  3  | 
  4  | export class LoginPage extends CommonPage {
  5  |   private accountInput: Locator;
  6  |   private passwordInput: Locator;
  7  |   private loginButton: Locator;
  8  |   private forgotPasswordLink: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     super(page);
  12 |     this.accountInput = page.getByRole("textbox", { name: "Tài khoản" });
  13 |     this.passwordInput = page.getByRole("textbox", { name: "Mật khẩu" });
  14 |     this.loginButton = page.getByRole("button", {
  15 |       name: "Đăng nhập",
  16 |     });
  17 |     this.forgotPasswordLink = page.getByText(/Quên mật khẩu/i);
  18 |   }
  19 |    async enterAccountInput(account: string) {
  20 |     await this.accountInput.fill(account);
  21 |   }
  22 | 
  23 |   async enterPasswordInput(password: string) {
  24 |     await this.passwordInput.fill(password);
  25 |   }
  26 | 
  27 |   async clickLoginButton() {
  28 |     await this.loginButton.click();
  29 |   }
  30 | 
  31 |   async login(account: string, password: string) {
  32 |     await this.enterAccountInput(account);
  33 |     await this.enterPasswordInput(password);
  34 |     await this.clickLoginButton();
  35 |   }
  36 | 
  37 |   async clickForgotPassword() {
> 38 |     await this.forgotPasswordLink.click();
     |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  39 |   }
  40 | }
```