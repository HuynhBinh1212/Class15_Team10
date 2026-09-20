import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("MuiContainer - News Section Feature", () => {

  test.beforeEach(async ({ page, homePage, loginPage, tinTucPage }) => {
    // 1. Thực hiện đăng nhập trước
    await page.goto("/");
    await homePage.getTopBarComponent().navigateToLoginPage();

    await loginPage.enterAccountInput("testing142"); // Tài khoản test
    await loginPage.enterPasswordInput("testing142"); // Mật khẩu test
    await loginPage.clickLoginButton();

    // Đợi quá trình đăng nhập hoàn tất và chuyển trang (chờ 1 giây để an toàn)
    await page.waitForTimeout(1000);

    // 2. Đi tới trang chủ và thực hiện test tin tức
    // Cuộn tới phần tử Điện Ảnh 24h
    await tinTucPage.tabDienAnh24h.scrollIntoViewIfNeeded();
  });

  test("D_36: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Điện ảnh 24h", async ({
    page, tinTucPage
  }) => {
    // Chờ nút Xem Thêm xuất hiện và click thẳng vào nó
    await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
    await tinTucPage.clickXemThem();
    await page.waitForTimeout(5000); // Chờ load thêm tin tức

    // Xác minh dòng text để đảm bảo đã vào đúng khu vực mong muốn
    const targetArticle = page.getByText(
      "TENET công bố ngày khởi chiếu chính thức tại Việt Nam",
    );
    await expect(targetArticle, "Verify Text thành công").toBeVisible({ timeout: 5000 });

    await verifyImages(page, tinTucPage.newsImages);
  });

  test("D_37: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Review", async ({
    page, tinTucPage
  }) => {
    // Chuyển sang tab Review
    await expect(tinTucPage.tabReview).toBeVisible({ timeout: 10000 });
    await tinTucPage.clickTabReview();
    await page.waitForTimeout(2000); // Đợi tab render

    // Bấm Xem Thêm
    await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
    await tinTucPage.clickXemThem();
    await page.waitForTimeout(5000); // Chờ load thêm tin tức

    // Gọi hàm kiểm tra ảnh
    await verifyImages(page, tinTucPage.newsImages);
  });

  test("D_38: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi", async ({
    page, tinTucPage
  }) => {
    // Chuyển sang tab Khuyến Mãi
    await expect(tinTucPage.tabKhuyenMai).toBeVisible({ timeout: 10000 });
    await tinTucPage.clickTabKhuyenMai();
    await page.waitForTimeout(2000); // Đợi tab render

    // Bấm Xem Thêm
    await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
    await tinTucPage.clickXemThem();
    await page.waitForTimeout(5000); // Chờ load thêm tin tức

    // Gọi hàm kiểm tra ảnh
    await verifyImages(page, tinTucPage.newsImages);
  });
});
