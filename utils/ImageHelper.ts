import { Page, Locator } from "@playwright/test";
import { expect } from "../fixtures/page-fixture";

export async function verifyImages(page: Page, images: Locator) {
  const count = await images.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    await expect(img).toBeVisible();

    // Lấy URL của thuộc tính src
    const src = await img.getAttribute('src');
    expect(src, "Hình ảnh bị thiếu thuộc tính src").toBeTruthy();

    if (src) {
      console.log(`Đang kiểm tra ảnh: ${src}`);
      
      // Kiểm tra thuộc tính src xem có chứa chuỗi lỗi do render sai dữ liệu không
      expect(src).not.toContain("undefined");
      expect(src).not.toContain("null");
      expect(src.toLowerCase()).not.toContain("error");
      
      // Lấy URL tuyệt đối dựa trên URL hiện tại của trang
      const url = new URL(src, page.url()).toString();
      
      // Gửi request tới URL để kiểm tra (chạy ngầm)
      let response;
      try {
        response = await page.request.get(url);
      } catch (error) {
        // Bắt lỗi nếu đường link chết (VD: ENOTFOUND do tên miền không tồn tại)
        expect(false, `Đường link không tồn tại hoặc không thể truy cập! URL: ${url}`).toBeTruthy();
        continue; // Dừng kiểm tra các bước tiếp theo cho ảnh này
      }
      
      // Mở URL trên một Tab mới để kiểm tra hiển thị thực tế
      const newTab = await page.context().newPage();
      await newTab.goto(url);
      await newTab.waitForTimeout(500); // Dừng nửa giây để bạn có thể nhìn thấy ảnh hiển thị
      await newTab.close(); // Đóng tab sau khi xem xong

      // Nếu URL trả về lỗi (như 404, 500), response.ok() sẽ là false
      expect(response.ok(), `Hình ảnh bị lỗi! URL [${url}] trả về mã trạng thái ${response.status()}`).toBeTruthy();
      
      // Kiểm tra Content-Type
      const headers = response.headers();
      const contentType = headers['content-type'] || '';
      expect(contentType.startsWith('image/'), `Hình ảnh bị lỗi cấu trúc! URL [${url}] trả về content-type là: ${contentType}`).toBeTruthy();
      
      // Lấy độ phân giải (chiều rộng, chiều cao)
      const { width, height } = await img.evaluate((image: HTMLImageElement) => ({
        width: image.naturalWidth,
        height: image.naturalHeight
      }));

      // Lấy dung lượng file (tính bằng KB)
      const contentLength = headers['content-length'];
      const sizeKB = contentLength ? (parseInt(contentLength) / 1024).toFixed(2) + " KB" : "Không xác định";

      console.log(`[SUCCESS] Hình ảnh hợp lệ!`);
      console.log(`  - Link ảnh (Ctrl + Click để xem): ${url}`);
      console.log(`  - Độ phân giải: ${width} x ${height} px`);
      console.log(`  - Dung lượng: ${sizeKB}`);
      console.log(`-------------------------------------------------`);
    }
  }
}
