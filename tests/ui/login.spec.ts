import { test, expect } from "../../fixtures/page-fixture";

test.describe("Login Feature", () => {

  test("D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập", async ({ page, homePage }) => {
    await page.goto("/");
    const topBar = homePage.getTopBarComponent();
    await topBar.navigateToLoginPage();
    await expect(page.getByRole("heading", { name: /Đăng Nhập/i }).first()).toBeVisible();
  });

  test("D_34: Kiểm tra đăng nhập thành công với tài khoản hợp lệ", async ({
    page, homePage, loginPage
  }) => {
    const account = "testing142";
    const password = "testing142";

    await page.goto("/");

    // 1. Điều hướng đến trang Đăng Nhập từ TopBar
    await homePage.getTopBarComponent().navigateToLoginPage();

    // 2. Nhập tài khoản và mật khẩu hợp lệ
    await loginPage.enterAccountInput(account);
    await loginPage.enterPasswordInput(password);

    // 3. Thực hiện Đăng nhập
    await loginPage.clickLoginButton();

    // 4. Kiểm tra thông báo Đăng nhập thành công
    const successLbl = page.getByRole("heading", {
      name: "Đăng nhập thành công",
    });
    await expect(successLbl).toBeVisible();
  });

  test("I_01: Kiểm tra chức năng Quên mật khẩu", async ({ page, homePage, loginPage }) => {
    await page.goto("/");
    
    // Điều hướng đến trang đăng nhập
    const topBar = homePage.getTopBarComponent();
    await topBar.navigateToLoginPage();
    
    // Click vào nút/liên kết Quên mật khẩu
    await loginPage.clickForgotPassword();
    
    // Kiểm tra điều hướng hoặc thông báo (chuyển trang không báo lỗi)
    expect(page.url()).not.toContain("error");
  });

});
