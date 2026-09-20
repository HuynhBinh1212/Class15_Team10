# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\tintuc.spec.ts >> MuiContainer - News Section Feature >> D_36: Kiểm tra hình ảnh lỗi sau khi click Xem Thêm trong mục Điện ảnh 24h
- Location: tests\ui\dashboard\tintuc.spec.ts:23:7

# Error details

```
Test timeout of 20000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 20000ms exceeded.
Call log:
  - waiting for getByText('Điện ảnh 24h').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e5]:
    - generic [ref=e7]:
      - img "Logo" [ref=e9]
      - generic [ref=e10]:
        - heading "Lịch Chiếu" [level=4] [ref=e12] [cursor=pointer]
        - heading "Cụm Rạp" [level=4] [ref=e14] [cursor=pointer]
        - heading "Tin Tức" [level=4] [ref=e16] [cursor=pointer]
        - heading "Ứng Dụng" [level=4] [ref=e18] [cursor=pointer]
      - generic [ref=e19]:
        - link [ref=e20] [cursor=pointer]:
          - /url: /account
          - img "Avatar" [ref=e22]
          - heading "testing playwright" [level=3] [ref=e23]
        - separator [ref=e24]
        - link [ref=e25] [cursor=pointer]:
          - /url: /
          - heading "Đăng xuất" [level=3] [ref=e28]
  - generic [ref=e30]:
    - generic [ref=e31]:
      - img "Img alt" [ref=e35]
      - button "Next" [ref=e37] [cursor=pointer]
      - button "Previous" [ref=e42] [cursor=pointer]
      - generic [ref=e46]:
        - button [ref=e47] [cursor=pointer]
        - button [ref=e51] [cursor=pointer]
        - button [ref=e55] [cursor=pointer]
    - generic [ref=e60]:
      - combobox [ref=e65] [cursor=pointer]:
        - option "Phim" [disabled] [selected]
      - combobox [ref=e70] [cursor=pointer]:
        - option "Rạp" [disabled] [selected]
      - combobox [ref=e75] [cursor=pointer]:
        - option "Ngày giờ chiếu" [disabled] [selected]
      - button "MUA VÉ NGAY" [ref=e79] [cursor=pointer]
  - generic [ref=e85]:
    - generic [ref=e87]:
      - tablist
    - tabpanel [ref=e89]
  - generic [ref=e90]:
    - tablist [ref=e93]:
      - tab "Điện Ảnh 24h" [selected] [ref=e94] [cursor=pointer]
      - tab "Review" [ref=e96] [cursor=pointer]
      - tab "Khuyến mãi" [ref=e98] [cursor=pointer]
    - tabpanel
    - button "XEM THÊM" [ref=e102] [cursor=pointer]
  - generic [ref=e106]:
    - generic [ref=e107]:
      - paragraph [ref=e108]: Ứng dụng tiện lợi dành cho
      - paragraph [ref=e109]: người yêu điện ảnh
      - paragraph [ref=e110]: Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
      - link "App miễn phí - Tải về ngay!" [ref=e111] [cursor=pointer]:
        - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
      - paragraph [ref=e113]:
        - text: TIX có hai phiên bản
        - link "IOS" [ref=e114]:
          - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
        - text: "&"
        - link "Android" [ref=e115]:
          - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
    - generic [ref=e116]:
      - img "phone" [ref=e117]
      - img "slider" [ref=e122]
  - contentinfo [ref=e123]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - paragraph [ref=e127]:
          - heading "TIX" [level=6] [ref=e128]
          - generic [ref=e129]:
            - generic [ref=e130]: FAQ
            - generic [ref=e131]: Thỏa thuận sử dụng
            - generic [ref=e132]: Brand Guidelines
            - generic [ref=e133]: Chính sách bảo mật
        - paragraph [ref=e135]:
          - heading "ĐỐI TÁC" [level=6] [ref=e136]
          - generic [ref=e137]:
            - link [ref=e139]:
              - /url: https://www.cgv.vn/
              - img "cgvlogo" [ref=e140]
            - link [ref=e142]:
              - /url: https://www.bhdstar.vn/
              - img "bhdlogo" [ref=e143]
            - link [ref=e145]:
              - /url: https://www.galaxycine.vn/
              - img "galaxylogo" [ref=e146]
            - link [ref=e148]:
              - /url: http://cinestar.com.vn/
              - img "starlogo" [ref=e149]
            - link [ref=e151]:
              - /url: http://lottecinemavn.com/LCHS/index.aspx
              - img "lottelogo" [ref=e152]
            - link [ref=e154]:
              - /url: https://www.megagscinemas.vn/
              - img "megalogo" [ref=e155]
            - link [ref=e157]:
              - /url: https://www.betacinemas.vn/home.htm
              - img "betalogo" [ref=e158]
            - link [ref=e160]:
              - /url: http://ddcinema.vn/
              - img "ddclogo" [ref=e161]
            - link [ref=e163]:
              - /url: https://touchcinema.com/
              - img "touchlogo" [ref=e164]
            - link [ref=e166]:
              - /url: https://cinemaxvn.com/
              - img "cinemaxlogo" [ref=e167]
            - link [ref=e169]:
              - /url: https://starlight.vn/
              - img "starlightlogo" [ref=e170]
            - link [ref=e172]:
              - /url: https://www.dcine.vn/
              - img "dcinelogo" [ref=e173]
            - link [ref=e175]:
              - /url: https://zalopay.vn/
              - img "zalologo" [ref=e176]
            - link [ref=e178]:
              - /url: https://www.payoo.vn/
              - img "payoologo" [ref=e179]
            - link [ref=e181]:
              - /url: https://portal.vietcombank.com.vn/Pages/Home.aspx
              - img "vietcombanklogo" [ref=e182]
            - link [ref=e184]:
              - /url: https://www.payoo.vn/
              - img "agribanklogo" [ref=e185]
            - link [ref=e187]:
              - /url: https://www.vietinbank.vn/web/home/vn/index.html
              - img "viettinbanklogo" [ref=e188]
            - link [ref=e190]:
              - /url: https://www.indovinabank.com.vn/
              - img "ivblogo" [ref=e191]
            - link [ref=e193]:
              - /url: https://webv3.123go.vn/
              - img "bachamlogo" [ref=e194]
            - link [ref=e196]:
              - /url: https://laban.vn/
              - img "labanlogo" [ref=e197]
        - generic [ref=e199]:
          - paragraph [ref=e201]:
            - heading "MOBILE APP" [level=6] [ref=e202]
            - generic [ref=e203]:
              - link [ref=e205]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e207]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
          - paragraph [ref=e209]:
            - heading "SOCIAL" [level=6] [ref=e210]
            - generic [ref=e211]:
              - link [ref=e213]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e215]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
      - separator [ref=e216]
      - paragraph [ref=e217]:
        - generic [ref=e220]:
          - heading "TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION" [level=6] [ref=e221]
          - 'heading "Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam." [level=6] [ref=e222]'
          - 'heading "Giấy chứng nhận đăng ký kinh doanh số: 0101659783," [level=6] [ref=e223]'
          - heading "đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp." [level=6] [ref=e224]
          - 'heading "Số Điện Thoại (Hotline): 1900 545 436" [level=6] [ref=e225]'
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
  16 |     await page.waitForTimeout(1000);
  17 | 
  18 |     // 2. Đi tới trang chủ và thực hiện test tin tức
  19 |     // Cuộn tới phần tử Điện Ảnh 24h
> 20 |     await tinTucPage.tabDienAnh24h.scrollIntoViewIfNeeded();
     |                                    ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 20000ms exceeded.
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