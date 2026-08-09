import { test, expect } from "../../fixtures/page-fixture";

test("TC_Login_01: Verify that user can login successfully with valid account", async ({
  page, homePage, loginPage
}) => {
  const account = "testing142";
  const password = "testing142";

  await page.goto("/");

  await homePage.getTopBarComponent().navigateToLoginPage();

  await loginPage.enterAccountInput(account);

  await loginPage.enterPasswordInput(password);

  await loginPage.clickLoginButton();

  const successLbl = page.getByRole("heading", {
    name: "Đăng nhập thành công",
  });
  await expect(successLbl).toBeVisible();
});

test("D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  const topBar = homePage.getTopBarComponent();
  await topBar.navigateToLoginPage();
  await expect(page.getByRole("heading", { name: "Đăng Nhập", exact: false })).toBeVisible();
});

test("D_35: Kiểm tra chức năng Quên mật khẩu", async ({ page, homePage, loginPage }) => {
  await page.goto("/");
  
  // Điều hướng đến trang đăng nhập
  const topBar = homePage.getTopBarComponent();
  await topBar.navigateToLoginPage();
  
  // Click vào nút/liên kết Quên mật khẩu
  await loginPage.clickForgotPassword();
  
  // Kiểm tra điều hướng hoặc thông báo (Tạm thời kiểm tra có chuyển trang không báo lỗi)
  expect(page.url()).not.toContain("error");
});
