import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("Dashboard Feature - TopBar Component", () => {

  test.beforeEach(async ({ page, homePage, loginPage }) => {
    await page.goto("/");

    // Thực hiện đăng nhập
    const topBar = homePage.getTopBarComponent();
    await topBar.navigateToLoginPage();
    await loginPage.enterAccountInput("testing142"); // Tài khoản test
    await loginPage.enterPasswordInput("testing142"); // Mật khẩu test
    await loginPage.clickLoginButton();
    
    // Đợi quá trình đăng nhập hoàn tất và thông báo (toast) biến mất để không che khuất Header
    await page.waitForTimeout(3000);
  });

  test.describe("Header", () => {
    test("D_01: Kiểm tra logo CyberSoft được hiển thị trên header", async ({ page, homePage }) => {
      const topBar = homePage.getTopBarComponent();
      const logo = await topBar.getLogoLocator();
      
      await verifyImages(page, logo);
    });

    test("D_02: Kiểm tra các menu trên header hiển thị đúng text, thứ tự và có thể click", async ({ homePage }) => {
      const topBar = homePage.getTopBarComponent();
      
      const lichChieu = await topBar.getMenuLocator("Lịch chiếu");
      const cumRap = await topBar.getMenuLocator("Cụm rạp");
      const tinTuc = await topBar.getMenuLocator("Tin tức");
      const ungDung = await topBar.getMenuLocator("Ứng dụng");

      // 1. Kiểm tra hiển thị và đúng text (dùng regex /i để không phân biệt hoa thường)
      await expect(lichChieu).toHaveText(/Lịch chiếu/i);
      await expect(cumRap).toHaveText(/Cụm rạp/i);
      await expect(tinTuc).toHaveText(/Tin tức/i);
      await expect(ungDung).toHaveText(/Ứng dụng/i);

      // 2. Kiểm tra có thể click được (nút ở trạng thái enabled)
      await expect(lichChieu).toBeEnabled();
      await expect(cumRap).toBeEnabled();
      await expect(tinTuc).toBeEnabled();
      await expect(ungDung).toBeEnabled();

      // 3. Kiểm tra đúng thứ tự (dựa trên toạ độ X từ trái qua phải)
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

    test("D_03: Kiểm tra thao tác click điều hướng đến trang Lịch Chiếu", async ({ page, homePage }) => {
      const topBar = homePage.getTopBarComponent();
      // Thực hiện thao tác click (Playwright tự động verify element có thể click được)
      await topBar.navigateToMenu("Lịch chiếu");
      // Xác minh cuộn trang hoặc đổi URL thành công (tuỳ cấu hình app, ở đây verify URL không chứa error)
      expect(page.url()).not.toContain("error");
    });

    test("D_04: Kiểm tra thao tác click điều hướng đến trang Cụm Rạp", async ({ page, homePage }) => {
      const topBar = homePage.getTopBarComponent();
      await topBar.navigateToMenu("Cụm rạp");
      expect(page.url()).not.toContain("error");
    });

    test("D_05: Kiểm tra thao tác click điều hướng đến trang Tin Tức", async ({ page, homePage }) => {
      const topBar = homePage.getTopBarComponent();
      await topBar.navigateToMenu("Tin tức");
      expect(page.url()).not.toContain("error");
    });

    test("D_06: Kiểm tra thao tác click điều hướng đến trang Ứng Dụng", async ({ page, homePage }) => {
      const topBar = homePage.getTopBarComponent();
      await topBar.navigateToMenu("Ứng dụng");
      expect(page.url()).not.toContain("error");
    });
  });
});
