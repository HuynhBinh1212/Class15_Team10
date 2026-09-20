# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.ts >> Login Feature >> D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập
- Location: tests\ui\login.spec.ts:5:7

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://demo1.cybersoft.edu.vn/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "../../fixtures/page-fixture";
  2  | 
  3  | test.describe("Login Feature", () => {
  4  | 
  5  |   test("D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập", async ({ page, homePage }) => {
> 6  |     await page.goto("/");
     |                ^ Error: page.goto: Target page, context or browser has been closed
  7  |     const topBar = homePage.getTopBarComponent();
  8  |     await topBar.navigateToLoginPage();
  9  |     await expect(page.getByRole("heading", { name: /Đăng Nhập/i }).first()).toBeVisible();
  10 |   });
  11 | 
  12 |   test("D_34: Kiểm tra đăng nhập thành công với tài khoản hợp lệ", async ({
  13 |     page, homePage, loginPage
  14 |   }) => {
  15 |     const account = "testing142";
  16 |     const password = "testing142";
  17 | 
  18 |     await page.goto("/");
  19 | 
  20 |     // 1. Điều hướng đến trang Đăng Nhập từ TopBar
  21 |     await homePage.getTopBarComponent().navigateToLoginPage();
  22 | 
  23 |     // 2. Nhập tài khoản và mật khẩu hợp lệ
  24 |     await loginPage.enterAccountInput(account);
  25 |     await loginPage.enterPasswordInput(password);
  26 | 
  27 |     // 3. Thực hiện Đăng nhập
  28 |     await loginPage.clickLoginButton();
  29 | 
  30 |     // 4. Kiểm tra thông báo Đăng nhập thành công
  31 |     const successLbl = page.getByRole("heading", {
  32 |       name: "Đăng nhập thành công",
  33 |     });
  34 |     await expect(successLbl).toBeVisible();
  35 |   });
  36 | 
  37 |   test("D_35: Kiểm tra chức năng Quên mật khẩu", async ({ page, homePage, loginPage }) => {
  38 |     await page.goto("/");
  39 |     
  40 |     // Điều hướng đến trang đăng nhập
  41 |     const topBar = homePage.getTopBarComponent();
  42 |     await topBar.navigateToLoginPage();
  43 |     
  44 |     // Click vào nút/liên kết Quên mật khẩu
  45 |     await loginPage.clickForgotPassword();
  46 |     
  47 |     // Kiểm tra điều hướng hoặc thông báo (chuyển trang không báo lỗi)
  48 |     expect(page.url()).not.toContain("error");
  49 |   });
  50 | 
  51 | });
  52 | 
```