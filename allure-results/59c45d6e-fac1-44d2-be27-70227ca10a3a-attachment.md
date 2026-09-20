# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\tintuc.spec.ts >> MuiContainer - News Section Feature >> D_38: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi
- Location: tests\ui\dashboard\tintuc.spec.ts:57:7

# Error details

```
Test timeout of 20000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForTimeout: Test timeout of 20000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e10]:
          - heading [level=4] [ref=e12] [cursor=pointer]: Lịch Chiếu
          - heading [level=4] [ref=e14] [cursor=pointer]: Cụm Rạp
          - heading [level=4] [ref=e16] [cursor=pointer]: Tin Tức
          - heading [level=4] [ref=e18] [cursor=pointer]: Ứng Dụng
        - generic [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /account
            - heading [level=3] [ref=e23]: testing playwright
          - separator [ref=e24]
          - link [ref=e25] [cursor=pointer]:
            - /url: /
            - heading [level=3] [ref=e28]: Đăng xuất
    - main [ref=e31]:
      - generic [ref=e32]:
        - heading [level=1] [ref=e36]: Đăng nhập
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic:
              - text: Tài Khoản
              - generic [aria-hidden]: "*"
            - generic [ref=e39]:
              - textbox [ref=e40]: testing142
              - group [aria-hidden]
          - generic [ref=e41]:
            - generic:
              - text: Mật Khẩu
              - generic [aria-hidden]: "*"
            - generic [ref=e42]:
              - textbox [ref=e43]: testing142
              - button [ref=e45] [cursor=pointer]
              - group [aria-hidden]
          - generic [ref=e49] [cursor=pointer]:
            - checkbox [ref=e52]
            - generic [ref=e55]: Nhớ tài khoản
          - button [ref=e56] [cursor=pointer]:
            - generic [ref=e57]: Đăng nhập
          - link [ref=e60] [cursor=pointer]:
            - /url: /sign-up
            - heading [level=3] [ref=e61]: Bạn chưa có tài khoản? Đăng ký
  - dialog [ref=e63]:
    - heading "Đăng nhập thành công" [level=2] [ref=e72]
    - generic: "!"
    - button "Đóng" [active] [ref=e74] [cursor=pointer]
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
  8  |     await page.goto("/");
  9  |     await homePage.getTopBarComponent().navigateToLoginPage();
  10 | 
  11 |     await loginPage.enterAccountInput("testing142"); // Tài khoản test
  12 |     await loginPage.enterPasswordInput("testing142"); // Mật khẩu test
  13 |     await loginPage.clickLoginButton();
  14 | 
  15 |     // Đợi quá trình đăng nhập hoàn tất và chuyển trang (chờ 1 giây để an toàn)
> 16 |     await page.waitForTimeout(1000);
     |                ^ Error: page.waitForTimeout: Test timeout of 20000ms exceeded.
  17 | 
  18 |     // 2. Đi tới trang chủ và thực hiện test tin tức
  19 |     // Cuộn tới phần tử Điện Ảnh 24h
  20 |     await tinTucPage.tabDienAnh24h.scrollIntoViewIfNeeded();
  21 |   });
  22 | 
  23 |   test("D_36: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Điện ảnh 24h", async ({
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
  40 |   test("D_37: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Review", async ({
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
  57 |   test("D_38: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Khuyến Mãi", async ({
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