import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("TopBar / Header Feature - Test Cases (D_01 to D_08 & D_35)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("D_01: Kiểm tra logo CyberSoft được hiển thị trên header", async ({
    page,
    topBarComponent,
  }) => {
    const logo = await topBarComponent.getLogoLocator();
    await expect(logo).toBeVisible();
    await verifyImages(page, logo);
  });

  test("D_02: Kiểm tra các menu trên header được hiển thị đầy đủ", async ({
    topBarComponent,
  }) => {
    const lichChieu = await topBarComponent.getMenuLocator("Lịch chiếu");
    const cumRap = await topBarComponent.getMenuLocator("Cụm rạp");
    const tinTuc = await topBarComponent.getMenuLocator("Tin tức");
    const ungDung = await topBarComponent.getMenuLocator("Ứng dụng");

    // 1. Kiểm tra hiển thị và đúng text
    await expect(lichChieu).toHaveText(/Lịch chiếu/i);
    await expect(cumRap).toHaveText(/Cụm rạp/i);
    await expect(tinTuc).toHaveText(/Tin tức/i);
    await expect(ungDung).toHaveText(/Ứng dụng/i);

    // 2. Kiểm tra có thể click (nút ở trạng thái enabled)
    await expect(lichChieu).toBeEnabled();
    await expect(cumRap).toBeEnabled();
    await expect(tinTuc).toBeEnabled();
    await expect(ungDung).toBeEnabled();

    // 3. Kiểm tra đúng thứ tự (dựa trên tọa độ X từ trái qua phải)
    const box1 = await lichChieu.boundingBox();
    const box2 = await cumRap.boundingBox();
    const box3 = await tinTuc.boundingBox();
    const box4 = await ungDung.boundingBox();

    if (box1 && box2 && box3 && box4) {
      expect(box1.x).toBeLessThan(box2.x);
      expect(box2.x).toBeLessThan(box3.x);
      expect(box3.x).toBeLessThan(box4.x);
    }
  });

  test("D_03: Kiểm tra điều hướng đến trang Lịch Chiếu", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToMenu("Lịch chiếu");
    expect(page.url()).not.toContain("error");
  });

  test("D_04: Kiểm tra điều hướng đến trang Cụm Rạp", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToMenu("Cụm rạp");
    expect(page.url()).not.toContain("error");
  });

  test("D_05: Kiểm tra điều hướng đến trang Tin Tức", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToMenu("Tin tức");
    expect(page.url()).not.toContain("error");
  });

  test("D_06: Kiểm tra điều hướng đến trang Ứng Dụng", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToMenu("Ứng dụng");
    expect(page.url()).not.toContain("error");
  });

  test("D_07: Kiểm tra hiển thị và điều hướng chức năng Đăng Nhập", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToLoginPage();
    await expect(
      page.getByRole("heading", { name: /Đăng nhập/i }).first(),
    ).toBeVisible();
  });

  test("D_08: Kiểm tra hiển thị và điều hướng chức năng Đăng Ký", async ({
    page,
    topBarComponent,
  }) => {
    await topBarComponent.navigateToRegisterPage();
    await expect(
      page.getByRole("heading", { name: /Đăng ký/i }).first(),
    ).toBeVisible();
  });

  test("D_39: Kiểm tra thông tin userlog và userprofile trên Header có trùng khớp hay không", async ({
    page,
    topBarComponent,
    loginPage,
  }) => {
    const account = "testing142";
    const password = "testing142";

    // 1. Điều hướng đến trang Đăng nhập từ Header
    await topBarComponent.navigateToLoginPage();

    // 2. Thực hiện Đăng nhập với tài khoản test (userlog)
    await loginPage.enterAccountInput(account);
    await loginPage.enterPasswordInput(password);
    await loginPage.clickLoginButton();

    // 3. Đợi hoàn tất đăng nhập
    await page.waitForTimeout(1000);

    // 4. Lấy thông tin user profile trên Header
    const userProfile = await topBarComponent.getUserProfileLocator();
    await expect(userProfile).toBeVisible({ timeout: 10000 });

    // 5. Kiểm tra thông tin tên profile hiển thị trùng khớp với Họ Tên của tài khoản đã đăng nhập
    await expect(userProfile).toContainText(/testing/i);
  });
});
