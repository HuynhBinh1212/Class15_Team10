# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Movie Listing >> D_21: Kiểm tra danh sách phim trên trang chủ được hiển thị
- Location: tests\ui\dashboard\dashboard.spec.ts:121:9

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
  - generic:
    - generic:
      - generic:
        - generic:
          - generic:
            - img "Img alt"
      - button "Next" [ref=e29] [cursor=pointer]
      - button "Previous" [ref=e33] [cursor=pointer]
      - generic [ref=e37]:
        - button [ref=e38] [cursor=pointer]
        - button [ref=e42] [cursor=pointer]
        - button [ref=e46] [cursor=pointer]
    - generic [ref=e51]:
      - combobox [ref=e56] [cursor=pointer]:
        - option "Phim" [disabled] [selected]
      - combobox [ref=e61] [cursor=pointer]:
        - option "Rạp" [disabled] [selected]
      - combobox [ref=e66] [cursor=pointer]:
        - option "Ngày giờ chiếu" [disabled] [selected]
      - button "MUA VÉ NGAY" [ref=e70] [cursor=pointer]
  - generic [ref=e76]:
    - generic [ref=e78]:
      - tablist
    - tabpanel [ref=e79]
  - generic [ref=e80]:
    - tablist [ref=e83]:
      - tab "Điện Ảnh 24h" [selected] [ref=e84] [cursor=pointer]
      - tab "Review" [ref=e86] [cursor=pointer]
      - tab "Khuyến mãi" [ref=e88] [cursor=pointer]
    - tabpanel
    - button "XEM THÊM" [ref=e92] [cursor=pointer]
  - generic [ref=e96]:
    - generic [ref=e97]:
      - paragraph [ref=e98]: Ứng dụng tiện lợi dành cho
      - paragraph [ref=e99]: người yêu điện ảnh
      - paragraph [ref=e100]: Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
      - link "App miễn phí - Tải về ngay!" [ref=e101] [cursor=pointer]:
        - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
      - paragraph [ref=e103]:
        - text: TIX có hai phiên bản
        - link "IOS" [ref=e104] [cursor=pointer]:
          - /url: https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197
        - text: "&"
        - link "Android" [ref=e105] [cursor=pointer]:
          - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
    - generic [ref=e106]:
      - img "phone" [ref=e107]
      - generic [ref=e108]:
        - generic:
          - generic:
            - generic:
              - img "slider"
  - contentinfo [ref=e109]:
    - generic [ref=e110]:
      - generic [ref=e111]:
        - paragraph [ref=e113]:
          - heading "TIX" [level=6] [ref=e114]
          - generic [ref=e115]:
            - generic [ref=e116]: FAQ
            - generic [ref=e117]: Thỏa thuận sử dụng
            - generic [ref=e118]: Brand Guidelines
            - generic [ref=e119]: Chính sách bảo mật
        - paragraph [ref=e121]:
          - heading "ĐỐI TÁC" [level=6] [ref=e122]
          - generic [ref=e123]:
            - link [ref=e125] [cursor=pointer]:
              - /url: https://www.cgv.vn/
              - img "cgvlogo" [ref=e126]
            - link [ref=e128] [cursor=pointer]:
              - /url: https://www.bhdstar.vn/
              - img "bhdlogo" [ref=e129]
            - link [ref=e131] [cursor=pointer]:
              - /url: https://www.galaxycine.vn/
              - img "galaxylogo" [ref=e132]
            - link [ref=e134] [cursor=pointer]:
              - /url: http://cinestar.com.vn/
              - img "starlogo" [ref=e135]
            - link [ref=e137] [cursor=pointer]:
              - /url: http://lottecinemavn.com/LCHS/index.aspx
              - img "lottelogo" [ref=e138]
            - link [ref=e140] [cursor=pointer]:
              - /url: https://www.megagscinemas.vn/
              - img "megalogo" [ref=e141]
            - link [ref=e143] [cursor=pointer]:
              - /url: https://www.betacinemas.vn/home.htm
              - img "betalogo" [ref=e144]
            - link [ref=e146] [cursor=pointer]:
              - /url: http://ddcinema.vn/
              - img "ddclogo" [ref=e147]
            - link [ref=e149] [cursor=pointer]:
              - /url: https://touchcinema.com/
              - img "touchlogo" [ref=e150]
            - link [ref=e152] [cursor=pointer]:
              - /url: https://cinemaxvn.com/
              - img "cinemaxlogo" [ref=e153]
            - link [ref=e155] [cursor=pointer]:
              - /url: https://starlight.vn/
              - img "starlightlogo" [ref=e156]
            - link [ref=e158] [cursor=pointer]:
              - /url: https://www.dcine.vn/
              - img "dcinelogo" [ref=e159]
            - link [ref=e161] [cursor=pointer]:
              - /url: https://zalopay.vn/
              - img "zalologo" [ref=e162]
            - link [ref=e164] [cursor=pointer]:
              - /url: https://www.payoo.vn/
              - img "payoologo" [ref=e165]
            - link [ref=e167] [cursor=pointer]:
              - /url: https://portal.vietcombank.com.vn/Pages/Home.aspx
              - img "vietcombanklogo" [ref=e168]
            - link [ref=e170] [cursor=pointer]:
              - /url: https://www.payoo.vn/
              - img "agribanklogo" [ref=e171]
            - link [ref=e173] [cursor=pointer]:
              - /url: https://www.vietinbank.vn/web/home/vn/index.html
              - img "viettinbanklogo" [ref=e174]
            - link [ref=e176] [cursor=pointer]:
              - /url: https://www.indovinabank.com.vn/
              - img "ivblogo" [ref=e177]
            - link [ref=e179] [cursor=pointer]:
              - /url: https://webv3.123go.vn/
              - img "bachamlogo" [ref=e180]
            - link [ref=e182] [cursor=pointer]:
              - /url: https://laban.vn/
              - img "labanlogo" [ref=e183]
        - generic [ref=e185]:
          - paragraph [ref=e187]:
            - heading "MOBILE APP" [level=6] [ref=e188]
            - generic [ref=e189]:
              - link [ref=e191] [cursor=pointer]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e193] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
          - paragraph [ref=e195]:
            - heading "SOCIAL" [level=6] [ref=e196]
            - generic [ref=e197]:
              - link [ref=e199] [cursor=pointer]:
                - /url: https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197
              - link [ref=e201] [cursor=pointer]:
                - /url: https://play.google.com/store/apps/details?id=vn.com.vng.phim123
      - separator [ref=e202]
      - paragraph [ref=e203]:
        - generic [ref=e206]:
          - heading "TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION" [level=6] [ref=e207]
          - 'heading "Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam." [level=6] [ref=e208]'
          - 'heading "Giấy chứng nhận đăng ký kinh doanh số: 0101659783," [level=6] [ref=e209]'
          - heading "đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp." [level=6] [ref=e210]
          - 'heading "Số Điện Thoại (Hotline): 1900 545 436" [level=6] [ref=e211]'
```

# Test source

```ts
  1   | import { test, expect } from "../../../fixtures/page-fixture";
  2   | import { verifyImages } from "../../../utils/ImageHelper";
  3   | 
  4   | test.describe("Dashboard Feature", () => {
  5   | 
  6   |   test.beforeEach(async ({ page }) => {
> 7   |     await page.goto("/");
      |                ^ Error: page.goto: Test timeout of 20000ms exceeded.
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
  107 |         await searchComp.clickDropdown(searchComp.ddlRap);
```