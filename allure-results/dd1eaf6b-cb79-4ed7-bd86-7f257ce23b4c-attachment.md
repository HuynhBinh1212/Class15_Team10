# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\tintuc.spec.ts >> MuiContainer - News Section Feature >> D_38: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi
- Location: tests\ui\dashboard\tintuc.spec.ts:57:7

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: locator.getAttribute: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Page, Locator } from "@playwright/test";
  2  | import { expect } from "../fixtures/page-fixture";
  3  | 
  4  | export async function verifyImages(page: Page, images: Locator) {
  5  |   const count = await images.count();
  6  |   expect(count).toBeGreaterThan(0);
  7  | 
  8  |   for (let i = 0; i < count; i++) {
  9  |     const img = images.nth(i);
  10 |     await expect(img).toBeVisible();
  11 | 
  12 |     // Lấy URL của thuộc tính src
> 13 |     const src = await img.getAttribute('src');
     |                           ^ Error: locator.getAttribute: Target page, context or browser has been closed
  14 |     expect(src, "Hình ảnh bị thiếu thuộc tính src").toBeTruthy();
  15 | 
  16 |     if (src) {
  17 |       console.log(`Đang kiểm tra ảnh: ${src}`);
  18 |       
  19 |       // Kiểm tra thuộc tính src xem có chứa chuỗi lỗi do render sai dữ liệu không
  20 |       expect(src).not.toContain("undefined");
  21 |       expect(src).not.toContain("null");
  22 |       expect(src.toLowerCase()).not.toContain("error");
  23 |       
  24 |       // Lấy URL tuyệt đối dựa trên URL hiện tại của trang
  25 |       const url = new URL(src, page.url()).toString();
  26 |       
  27 |       // Gửi request tới URL để kiểm tra (chạy ngầm)
  28 |       let response;
  29 |       try {
  30 |         response = await page.request.get(url);
  31 |       } catch (error) {
  32 |         // Bắt lỗi nếu đường link chết (VD: ENOTFOUND do tên miền không tồn tại)
  33 |         expect(false, `Đường link không tồn tại hoặc không thể truy cập! URL: ${url}`).toBeTruthy();
  34 |         continue; // Dừng kiểm tra các bước tiếp theo cho ảnh này
  35 |       }
  36 |       
  37 |       // Mở URL trên một Tab mới để kiểm tra hiển thị thực tế
  38 |       const newTab = await page.context().newPage();
  39 |       await newTab.goto(url);
  40 |       await newTab.waitForTimeout(500); // Dừng nửa giây để bạn có thể nhìn thấy ảnh hiển thị
  41 |       await newTab.close(); // Đóng tab sau khi xem xong
  42 | 
  43 |       // Nếu URL trả về lỗi (như 404, 500), response.ok() sẽ là false
  44 |       expect(response.ok(), `Hình ảnh bị lỗi! URL [${url}] trả về mã trạng thái ${response.status()}`).toBeTruthy();
  45 |       
  46 |       // Kiểm tra Content-Type
  47 |       const headers = response.headers();
  48 |       const contentType = headers['content-type'] || '';
  49 |       expect(contentType.startsWith('image/'), `Hình ảnh bị lỗi cấu trúc! URL [${url}] trả về content-type là: ${contentType}`).toBeTruthy();
  50 |       
  51 |       // Lấy độ phân giải (chiều rộng, chiều cao)
  52 |       const { width, height } = await img.evaluate((image: HTMLImageElement) => ({
  53 |         width: image.naturalWidth,
  54 |         height: image.naturalHeight
  55 |       }));
  56 | 
  57 |       // Lấy dung lượng file (tính bằng KB)
  58 |       const contentLength = headers['content-length'];
  59 |       const sizeKB = contentLength ? (parseInt(contentLength) / 1024).toFixed(2) + " KB" : "Không xác định";
  60 | 
  61 |       console.log(`[SUCCESS] Hình ảnh hợp lệ!`);
  62 |       console.log(`  - Link ảnh (Ctrl + Click để xem): ${url}`);
  63 |       console.log(`  - Độ phân giải: ${width} x ${height} px`);
  64 |       console.log(`  - Dung lượng: ${sizeKB}`);
  65 |       console.log(`-------------------------------------------------`);
  66 |     }
  67 |   }
  68 | }
  69 | 
```