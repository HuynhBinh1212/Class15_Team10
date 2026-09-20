# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\dashboard.spec.ts >> Dashboard Feature >> Cinema List >> D_31: Kiểm tra danh sách rạp được hiển thị
- Location: tests\ui\dashboard\dashboard.spec.ts:159:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.jss159, #cumRap, .cinema-list-wrapper, .cinema-container').first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.jss159, #cumRap, .cinema-list-wrapper, .cinema-container').first() with timeout 10000ms
  - waiting for locator('.jss159, #cumRap, .cinema-list-wrapper, .cinema-container').first()

```

```yaml
- banner:
  - img "Logo"
  - heading "Lịch Chiếu" [level=4]
  - heading "Cụm Rạp" [level=4]
  - heading "Tin Tức" [level=4]
  - heading "Ứng Dụng" [level=4]
  - link "Đăng Nhập":
    - /url: /sign-in
    - heading "Đăng Nhập" [level=3]
  - separator
  - link "Đăng Ký":
    - /url: /sign-up
    - heading "Đăng Ký" [level=3]
- img "loading"
```

# Test source

```ts
  61  |       expect(optionCount).toBeGreaterThan(1);
  62  |     });
  63  | 
  64  |     test("D_16: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chỉ chọn Phim", async ({ homePage }) => {
  65  |       const searchComp = homePage.getMovieSearchComponent();
  66  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  67  |       const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
  68  |       expect(optionCount).toBeLessThanOrEqual(1);
  69  |     });
  70  | 
  71  |     test("D_17: Click nút 'Mua vé ngay' khi chưa chọn Phim + Rạp + Ngày giờ chiếu", async ({ page, homePage }) => {
  72  |       const searchComp = homePage.getMovieSearchComponent();
  73  |       let alertTriggered = false;
  74  |       page.once('dialog', async dialog => {
  75  |         alertTriggered = true;
  76  |         await dialog.dismiss().catch(() => {});
  77  |       });
  78  |       await searchComp.clickMuaVeNgay();
  79  |     });
  80  | 
  81  |     test("D_18: Click nút 'Mua vé ngay' khi chỉ chọn Phim", async ({ page, homePage }) => {
  82  |       const searchComp = homePage.getMovieSearchComponent();
  83  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  84  |       let alertTriggered = false;
  85  |       page.once('dialog', async dialog => {
  86  |         alertTriggered = true;
  87  |         await dialog.dismiss().catch(() => {});
  88  |       });
  89  |       await searchComp.clickMuaVeNgay();
  90  |     });
  91  | 
  92  |     test("D_19: Click nút 'Mua vé ngay' khi chỉ chọn Phim + Rạp", async ({ page, homePage }) => {
  93  |       const searchComp = homePage.getMovieSearchComponent();
  94  |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  95  |       await searchComp.selectFirstValidOption(searchComp.ddlRap);
  96  |       let alertTriggered = false;
  97  |       page.once('dialog', async dialog => {
  98  |         alertTriggered = true;
  99  |         await dialog.dismiss().catch(() => {});
  100 |       });
  101 |       await searchComp.clickMuaVeNgay();
  102 |     });
  103 | 
  104 |     test("D_20: Kiểm tra tìm kiếm suất chiếu với đầy đủ thông tin", async ({ page, homePage }) => {
  105 |       const searchComp = homePage.getMovieSearchComponent();
  106 |       await searchComp.selectFirstValidOption(searchComp.ddlPhim);
  107 |       await searchComp.selectFirstValidOption(searchComp.ddlRap);
  108 |       await searchComp.selectFirstValidOption(searchComp.ddlNgayGioChieu);
  109 |       let alertTriggered = false;
  110 |       page.once('dialog', async dialog => {
  111 |         alertTriggered = true;
  112 |         await dialog.dismiss().catch(() => {});
  113 |       });
  114 |       await searchComp.clickMuaVeNgay();
  115 |     });
  116 |   });
  117 | 
  118 |   test.describe("Movie Listing", () => {
  119 |     test("D_21: Kiểm tra danh sách phim trên trang chủ được hiển thị", async ({ page, homePage }) => {
  120 |       const movieListing = homePage.getMovieListingComponent();
  121 |       await expect(movieListing.movieListContainer).toBeVisible();
  122 |       const firstCard = movieListing.movieCards.first();
  123 |       await expect(firstCard).toBeVisible();
  124 |     });
  125 | 
  126 |     test("D_22: Kiểm tra pagination của danh sách phim", async ({ homePage }) => {
  127 |       const movieListing = homePage.getMovieListingComponent();
  128 |       await movieListing.movieCards.first().waitFor();
  129 |       await movieListing.clickNextPagination();
  130 |       await expect(movieListing.movieCards.first()).toBeVisible();
  131 |     });
  132 | 
  133 |     test("D_23: Kiểm tra thông tin hiển thị trên thẻ phim", async ({ page, homePage }) => {
  134 |       const movieListing = homePage.getMovieListingComponent();
  135 |       const firstCard = await movieListing.getMovieCardByIndex(0);
  136 |       await expect(firstCard).toBeVisible();
  137 |     });
  138 | 
  139 |     test("D_24: Nhãn phân loại độ tuổi", async ({ homePage }) => {
  140 |       const movieListing = homePage.getMovieListingComponent();
  141 |       const firstCard = await movieListing.getMovieCardByIndex(0);
  142 |       const ageLabel = await movieListing.getMovieAgeLabel(firstCard);
  143 |       if (await ageLabel.count() > 0) {
  144 |         await expect(ageLabel).toBeVisible();
  145 |       }
  146 |     });
  147 | 
  148 |     test("D_25: Hiển thị nút 'Play' và 'Mua vé' khi rê chuột", async ({ homePage }) => {
  149 |       const movieListing = homePage.getMovieListingComponent();
  150 |       const firstCard = await movieListing.getMovieCardByIndex(0);
  151 |       await firstCard.scrollIntoViewIfNeeded();
  152 |       await firstCard.hover();
  153 |       const playBtn = await movieListing.getMoviePlayBtn(firstCard);
  154 |       await expect(playBtn).toBeVisible();
  155 |     });
  156 |   });
  157 | 
  158 |   test.describe("Cinema List", () => {
  159 |     test("D_31: Kiểm tra danh sách rạp được hiển thị", async ({ homePage }) => {
  160 |       const cinemaList = homePage.getCinemaListComponent();
> 161 |       await expect(cinemaList.cinemaListContainer).toBeVisible();
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  162 |       await expect(await cinemaList.getCinemaSystemLogos()).not.toHaveCount(0);
  163 |     });
  164 | 
  165 |     test("D_32: Kiểm tra hiển thị nội dung danh sách rạp phim", async ({ page, homePage }) => {
  166 |       const cinemaList = homePage.getCinemaListComponent();
  167 |       const cinemaLogo = (await cinemaList.getCinemaSystemLogos()).first();
  168 |       await expect(cinemaLogo).toBeVisible();
  169 |       await verifyImages(page, cinemaLogo);
  170 |     });
  171 | 
  172 |     test("D_33: Chọn một rạp để xem lịch chiếu", async ({ homePage }) => {
  173 |       const cinemaList = homePage.getCinemaListComponent();
  174 |       const logos = await cinemaList.getCinemaSystemLogos();
  175 |       if (await logos.count() > 1) {
  176 |           await cinemaList.clickCinemaSystemByIndex(1);
  177 |           await expect(cinemaList.showTimesList.first()).toBeVisible();
  178 |       }
  179 |     });
  180 |   });
  181 | 
  182 |   test.describe("UI / Responsive & Loading", () => {
  183 |     test("D_27: Kiểm tra giao diện trên màn hình desktop", async ({ page }) => {
  184 |       await page.setViewportSize({ width: 1920, height: 1080 });
  185 |       await page.goto("/");
  186 |       await expect(page.locator('body')).toBeVisible();
  187 |     });
  188 | 
  189 |     test("D_28: Kiểm tra responsive trên màn hình nhỏ", async ({ page }) => {
  190 |       await page.setViewportSize({ width: 375, height: 667 });
  191 |       await page.goto("/");
  192 |       await expect(page.locator('body')).toBeVisible();
  193 |     });
  194 | 
  195 |     test("D_29: Kiểm tra trạng thái loading khi tải dữ liệu phim", async ({ page }) => {
  196 |       await page.route('**/api/QuanLyPhim/**', async route => {
  197 |         await new Promise(resolve => setTimeout(resolve, 2000));
  198 |         await route.continue();
  199 |       });
  200 |       await page.goto("/");
  201 |       await expect(page.locator('body')).toBeVisible();
  202 |     });
  203 | 
  204 |     test("D_30: Kiểm tra giao diện khi API lấy danh sách phim bị lỗi", async ({ page }) => {
  205 |       await page.route('**/api/QuanLyPhim/**', async route => {
  206 |         await route.fulfill({ status: 500, body: 'Internal Server Error' });
  207 |       });
  208 |       await page.goto("/");
  209 |       await expect(page.locator('body')).toBeVisible();
  210 |     });
  211 |   });
  212 | });
  213 | 
```