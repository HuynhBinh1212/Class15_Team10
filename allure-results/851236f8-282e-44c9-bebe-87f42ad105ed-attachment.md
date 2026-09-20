# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\tintuc.spec.ts >> MuiContainer - News Section Feature >> D_36: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi
- Location: tests\ui\dashboard\tintuc.spec.ts:57:7

# Error details

```
Test timeout of 20000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 20000ms exceeded.
Call log:
  - navigating to "https://demo1.cybersoft.edu.vn/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - img "Logo"
      - generic [ref=e9]:
        - heading "Lịch Chiếu" [level=4] [ref=e11] [cursor=pointer]
        - heading "Cụm Rạp" [level=4] [ref=e13] [cursor=pointer]
        - heading "Tin Tức" [level=4] [ref=e15] [cursor=pointer]
        - heading "Ứng Dụng" [level=4] [ref=e17] [cursor=pointer]
      - generic [ref=e18]:
        - link [ref=e19] [cursor=pointer]:
          - /url: /sign-in
          - heading "Đăng Nhập" [level=3] [ref=e22]
        - separator [ref=e23]
        - link [ref=e24] [cursor=pointer]:
          - /url: /sign-up
          - heading "Đăng Ký" [level=3] [ref=e27]
  - generic [ref=e29]:
    - img "loading"
```

# Test source

```ts
  1  | import { test, expect } from "../../../fixtures/page-fixture";
  2  | import { verifyImages } from "../../../utils/ImageHelper";
  3  | 
  4  | test.describe("MuiContainer - News Section Feature", () => {
  5  | 
  6  |   test.beforeEach(async ({ page, homePage, loginPage, tinTucPage }) => {
  7  |     // 1. Thực hiện đăng nhập trước
> 8  |     await page.goto("/");
     |                ^ Error: page.goto: Test timeout of 20000ms exceeded.
  9  |     await homePage.getTopBarComponent().navigateToLoginPage();
  10 | 
  11 |     await loginPage.enterAccountInput("testing142"); // Tài khoản test
  12 |     await loginPage.enterPasswordInput("testing142"); // Mật khẩu test
  13 |     await loginPage.clickLoginButton();
  14 | 
  15 |     // Đợi quá trình đăng nhập hoàn tất và chuyển trang (chờ 1 giây để an toàn)
  16 |     await page.waitForTimeout(1000);
  17 | 
  18 |     // 2. Đi tới trang chủ và thực hiện test tin tức
  19 |     // Cuộn tới phần tử Điện Ảnh 24h
  20 |     await tinTucPage.tabDienAnh24h.scrollIntoViewIfNeeded();
  21 |   });
  22 | 
  23 |   test("D_34: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Điện ảnh 24h", async ({
  24 |     page, tinTucPage
  25 |   }) => {
  26 |     // Chờ nút Xem Thêm xuất hiện và click thẳng vào nó
  27 |     await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
  28 |     await tinTucPage.clickXemThem();
  29 |     await page.waitForTimeout(5000); // Chờ load thêm tin tức
  30 | 
  31 |     // Xác minh dòng text để đảm bảo đã vào đúng khu vực mong muốn
  32 |     const targetArticle = page.getByText(
  33 |       "TENET công bố ngày khởi chiếu chính thức tại Việt Nam",
  34 |     );
  35 |     await expect(targetArticle, "Verify Text thành công").toBeVisible({ timeout: 5000 });
  36 | 
  37 |     await verifyImages(page, tinTucPage.newsImages);
  38 |   });
  39 | 
  40 |   test("D_35: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Review", async ({
  41 |     page, tinTucPage
  42 |   }) => {
  43 |     // Chuyển sang tab Review
  44 |     await expect(tinTucPage.tabReview).toBeVisible({ timeout: 10000 });
  45 |     await tinTucPage.clickTabReview();
  46 |     await page.waitForTimeout(2000); // Đợi tab render
  47 | 
  48 |     // Bấm Xem Thêm
  49 |     await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
  50 |     await tinTucPage.clickXemThem();
  51 |     await page.waitForTimeout(5000); // Chờ load thêm tin tức
  52 | 
  53 |     // Gọi hàm kiểm tra ảnh
  54 |     await verifyImages(page, tinTucPage.newsImages);
  55 |   });
  56 | 
  57 |   test("D_36: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi", async ({
  58 |     page, tinTucPage
  59 |   }) => {
  60 |     // Chuyển sang tab Khuyến Mãi
  61 |     await expect(tinTucPage.tabKhuyenMai).toBeVisible({ timeout: 10000 });
  62 |     await tinTucPage.clickTabKhuyenMai();
  63 |     await page.waitForTimeout(2000); // Đợi tab render
  64 | 
  65 |     // Bấm Xem Thêm
  66 |     await expect(tinTucPage.btnXemThem).toBeVisible({ timeout: 10000 });
  67 |     await tinTucPage.clickXemThem();
  68 |     await page.waitForTimeout(5000); // Chờ load thêm tin tức
  69 | 
  70 |     // Gọi hàm kiểm tra ảnh
  71 |     await verifyImages(page, tinTucPage.newsImages);
  72 |   });
  73 | });
  74 | 
```