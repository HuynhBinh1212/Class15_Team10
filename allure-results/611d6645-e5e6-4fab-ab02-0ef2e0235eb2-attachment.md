# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Movie Listing >> D_22: Kiểm tra pagination của danh sách phim
- Location: tests\ui\dashboard\dashboard.spec.ts:129:9

# Error details

```
Test timeout of 20000ms exceeded while running "beforeEach" hook.
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
          - /url: /sign-in
          - heading "Đăng Nhập" [level=3] [ref=e23]
        - separator [ref=e24]
        - link [ref=e25] [cursor=pointer]:
          - /url: /sign-up
          - heading "Đăng Ký" [level=3] [ref=e28]
  - generic:
    - generic:
      - generic:
        - generic:
          - generic:
            - img "Img alt"
      - button "Next" [ref=e30] [cursor=pointer]
      - button "Previous" [ref=e34] [cursor=pointer]
      - generic [ref=e38]:
        - button [ref=e39] [cursor=pointer]
        - button [ref=e43] [cursor=pointer]
        - button [ref=e47] [cursor=pointer]
    - generic [ref=e52]:
      - combobox [ref=e57] [cursor=pointer]:
        - option "Phim" [disabled] [selected]
      - combobox [ref=e62] [cursor=pointer]:
        - option "Rạp" [disabled] [selected]
      - combobox [ref=e67] [cursor=pointer]:
        - option "Ngày giờ chiếu" [disabled] [selected]
      - button "MUA VÉ NGAY" [ref=e71] [cursor=pointer]
  - generic [ref=e77]:
    - generic [ref=e79]:
      - tablist
    - tabpanel [ref=e80]
  - generic [ref=e81]:
    - tablist [ref=e84]:
      - tab "Điện Ảnh 24h" [selected] [ref=e85] [cursor=pointer]
      - tab "Review" [ref=e87] [cursor=pointer]
      - tab "Khuyến mãi" [ref=e89] [cursor=pointer]
    - tabpanel
    - button "XEM THÊM" [ref=e93] [cursor=pointer]
  - generic [ref=e97]:
    - generic [ref=e98]:
      - paragraph [ref=e99]: Ứng dụng tiện lợi dành cho
      - paragraph [ref=e100]: người yêu điện ảnh
      - paragraph [ref=e101]: Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
      - link "App miễn phí - Tải về ngay!" [ref=e102] [cursor=pointer]:
        - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
      - paragraph [ref=e104]:
        - text: TIX có hai phiên bản
        - link "IOS" [ref=e105] [cursor=pointer]:
          - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
        - text: "&"
        - link "Android" [ref=e106] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
    - generic [ref=e107]:
      - img "phone" [ref=e108]
      - img "slider" [ref=e113]
  - contentinfo [ref=e114]:
    - generic [ref=e115]:
      - generic [ref=e116]:
        - paragraph [ref=e118]:
          - heading "TIX" [level=6] [ref=e119]
          - generic [ref=e120]:
            - generic [ref=e121]: FAQ
            - generic [ref=e122]: Thỏa thuận sử dụng
            - generic [ref=e123]: Brand Guidelines
            - generic [ref=e124]: Chính sách bảo mật
        - paragraph [ref=e126]:
          - heading "ĐỐI TÁC" [level=6] [ref=e127]
          - generic [ref=e128]:
            - link [ref=e130] [cursor=pointer]:
              - /url: https://www.cgv.vn/
              - img "cgvlogo" [ref=e131]
            - link [ref=e133] [cursor=pointer]:
              - /url: https://www.bhdstar.vn/
              - img "bhdlogo" [ref=e134]
            - link [ref=e136] [cursor=pointer]:
              - /url: https://www.galaxycine.vn/
              - img "galaxylogo" [ref=e137]
            - link [ref=e139] [cursor=pointer]:
              - /url: http://cinestar.com.vn/
              - img "starlogo" [ref=e140]
            - link [ref=e142] [cursor=pointer]:
              - /url: http://lottecinemavn.com/LCHS/index.aspx
              - img "lottelogo" [ref=e143]
            - link [ref=e145] [cursor=pointer]:
              - /url: https://www.megagscinemas.vn/
              - img "megalogo" [ref=e146]
            - link [ref=e148] [cursor=pointer]:
              - /url: https://www.betacinemas.vn/home.htm
              - img "betalogo" [ref=e149]
            - link [ref=e151] [cursor=pointer]:
              - /url: http://ddcinema.vn/
              - img "ddclogo" [ref=e152]
            - link [ref=e154] [cursor=pointer]:
              - /url: https://touchcinema.com/
              - img "touchlogo" [ref=e155]
            - link [ref=e157] [cursor=pointer]:
              - /url: https://cinemaxvn.com/
              - img "cinemaxlogo" [ref=e158]
            - link [ref=e160] [cursor=pointer]:
              - /url: https://starlight.vn/
              - img "starlightlogo" [ref=e161]
            - link [ref=e163] [cursor=pointer]:
              - /url: https://www.dcine.vn/
              - img "dcinelogo" [ref=e164]
            - link [ref=e166] [cursor=pointer]:
              - /url: https://zalopay.vn/
              - img "zalologo" [ref=e167]
            - link [ref=e169] [cursor=pointer]:
              - /url: https://www.payoo.vn/
              - img "payoologo" [ref=e170]
            - link [ref=e172] [cursor=pointer]:
              - /url: https://portal.vietcombank.com.vn/Pages/Home.aspx
              - img "vietcombanklogo" [ref=e173]
            - link [ref=e175] [cursor=pointer]:
              - /url: https://www.payoo.vn/
              - img "agribanklogo" [ref=e176]
            - link [ref=e178] [cursor=pointer]:
              - /url: https://www.vietinbank.vn/web/home/vn/index.html
              - img "viettinbanklogo" [ref=e179]
            - link [ref=e181] [cursor=pointer]:
              - /url: https://www.indovinabank.com.vn/
              - img "ivblogo" [ref=e182]
            - link [ref=e184] [cursor=pointer]:
              - /url: https://webv3.123go.vn/
              - img "bachamlogo" [ref=e185]
            - link [ref=e187] [cursor=pointer]:
              - /url: https://laban.vn/
              - img "labanlogo" [ref=e188]
        - generic [ref=e190]:
          - paragraph [ref=e192]:
            - heading "MOBILE APP" [level=6] [ref=e193]
            - generic [ref=e194]:
              - link [ref=e196] [cursor=pointer]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e198] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
          - paragraph [ref=e200]:
            - heading "SOCIAL" [level=6] [ref=e201]
            - generic [ref=e202]:
              - link [ref=e204] [cursor=pointer]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e206] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
      - separator [ref=e207]
      - paragraph [ref=e208]:
        - generic [ref=e211]:
          - heading "TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION" [level=6] [ref=e212]
          - 'heading "Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam." [level=6] [ref=e213]'
          - 'heading "Giấy chứng nhận đăng ký kinh doanh số: 0101659783," [level=6] [ref=e214]'
          - heading "đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp." [level=6] [ref=e215]
          - 'heading "Số Điện Thoại (Hotline): 1900 545 436" [level=6] [ref=e216]'
```

# Test source

```ts
  1   | import { test, expect } from "../../../fixtures/page-fixture";
  2   | import { verifyImages } from "../../../utils/ImageHelper";
  3   | 
  4   | test.describe("Dashboard Feature", () => {
  5   | 
> 6   |   test.beforeEach(async ({ page }) => {
      |        ^ Test timeout of 20000ms exceeded while running "beforeEach" hook.
  7   |     await page.goto("/");
  8   |   });
  9   | 
  10  |   test.describe("Banner", () => {
  11  |     test("D_09: Kiểm tra slider banner hiển thị hình ảnh", async ({ page }) => {
  12  |       const bannerImg = page.locator('.slick-slider img, .carousel img').first();
  13  |       await expect(bannerImg, "Kiểm tra banner hiển thị").toBeVisible();
  14  |       await verifyImages(page, bannerImg);
  15  |     });
  16  |   });
  17  | 
  18  |   test.describe("Movie Search (Quick Booking Bar)", () => {
  19  |     test("D_10: Kiểm tra dropdown Phim hiển thị danh sách phim", async ({ homePage }) => {
  20  |       const searchComp = homePage.getMovieSearchComponent();
  21  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  22  |       await expect(searchComp.optionList.first()).toBeVisible();
  23  |     });
  24  | 
  25  |     test("D_11: Tìm kiếm bằng chữ cái tên phim trong danh sách phim", async ({ page, homePage }) => {
  26  |       const searchComp = homePage.getMovieSearchComponent();
  27  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  28  |       await page.keyboard.type("Avatar");
  29  |       await page.waitForTimeout(500);
  30  |       await expect(searchComp.optionList.first()).toBeVisible();
  31  |     });
  32  | 
  33  |     test("D_12: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi chưa chọn Phim", async ({ homePage }) => {
  34  |       const searchComp = homePage.getMovieSearchComponent();
  35  |       await searchComp.clickDropdown(searchComp.ddlRap);
  36  |       await expect(searchComp.optionList).not.toBeVisible();
  37  |     });
  38  | 
  39  |     test("D_13: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi đã chọn Phim", async ({ page, homePage }) => {
  40  |       const searchComp = homePage.getMovieSearchComponent();
  41  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  42  |       if (await searchComp.optionList.first().isVisible()) {
  43  |         await searchComp.optionList.first().click();
  44  |         await searchComp.clickDropdown(searchComp.ddlRap);
  45  |         await expect(searchComp.optionList.first()).toBeVisible();
  46  |       }
  47  |     });
  48  | 
  49  |     test("D_14: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chưa chọn Phim và Rạp", async ({ homePage }) => {
  50  |       const searchComp = homePage.getMovieSearchComponent();
  51  |       await searchComp.clickDropdown(searchComp.ddlNgayGioChieu);
  52  |       await expect(searchComp.optionList).not.toBeVisible();
  53  |     });
  54  | 
  55  |     test("D_15: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu đã chọn Phim và Rạp", async ({ page, homePage }) => {
  56  |       const searchComp = homePage.getMovieSearchComponent();
  57  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  58  |       await searchComp.optionList.first().click();
  59  |       await searchComp.clickDropdown(searchComp.ddlRap);
  60  |       await searchComp.optionList.first().click();
  61  |       await searchComp.clickDropdown(searchComp.ddlNgayGioChieu);
  62  |       await expect(searchComp.optionList.first(), "Kỳ vọng hiển thị suất chiếu khi chọn Phim và Rạp").toBeVisible();
  63  |     });
  64  | 
  65  |     test("D_16: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chỉ chọn Phim", async ({ homePage }) => {
  66  |       const searchComp = homePage.getMovieSearchComponent();
  67  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  68  |       if (await searchComp.optionList.first().isVisible()) {
  69  |         await searchComp.optionList.first().click();
  70  |         await searchComp.clickDropdown(searchComp.ddlNgayGioChieu);
  71  |         await expect(searchComp.optionList).not.toBeVisible();
  72  |       }
  73  |     });
  74  | 
  75  |     test("D_17: Click nút 'Mua vé ngay' khi chưa chọn Phim + Rạp + Ngày giờ chiếu", async ({ page, homePage }) => {
  76  |       const searchComp = homePage.getMovieSearchComponent();
  77  |       await searchComp.clickMuaVeNgay();
  78  |     });
  79  | 
  80  |     test("D_18: Click nút 'Mua vé ngay' khi chỉ chọn Phim", async ({ page, homePage }) => {
  81  |       const searchComp = homePage.getMovieSearchComponent();
  82  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  83  |       if (await searchComp.optionList.first().isVisible()) {
  84  |         await searchComp.optionList.first().click();
  85  |         await searchComp.clickMuaVeNgay();
  86  |       }
  87  |     });
  88  | 
  89  |     test("D_19: Click nút 'Mua vé ngay' khi chỉ chọn Phim + Rạp", async ({ page, homePage }) => {
  90  |       const searchComp = homePage.getMovieSearchComponent();
  91  |       await searchComp.clickDropdown(searchComp.ddlPhim);
  92  |       if (await searchComp.optionList.first().isVisible()) {
  93  |         await searchComp.optionList.first().click();
  94  |         await searchComp.clickDropdown(searchComp.ddlRap);
  95  |         if (await searchComp.optionList.first().isVisible()) {
  96  |           await searchComp.optionList.first().click();
  97  |           await searchComp.clickMuaVeNgay();
  98  |         }
  99  |       }
  100 |     });
  101 | 
  102 |     test("D_20: Kiểm tra tìm kiếm suất chiếu với đầy đủ thông tin", async ({ page, homePage }) => {
  103 |       const searchComp = homePage.getMovieSearchComponent();
  104 |       await searchComp.clickDropdown(searchComp.ddlPhim);
  105 |       if (await searchComp.optionList.first().isVisible()) {
  106 |         await searchComp.optionList.first().click();
```