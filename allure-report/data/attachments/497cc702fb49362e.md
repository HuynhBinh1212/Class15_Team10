# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\dashboard\moviesearch.spec.ts >> Movie Search & Listing Feature >> D_35: Xem danh sách phim ở trang thứ 2, chọn phim John Cena WWE và kiểm tra hình ảnh poster/trailer phim
- Location: tests\ui\dashboard\moviesearch.spec.ts:19:7

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: Kiểm tra hình ảnh poster/trailer phim hiển thị trên trang chi tiết

expect(locator).toBeVisible() failed

Locator:  locator('img').nth(1)
Expected: visible
Received: hidden
Timeout:  10000ms

Call log:
  - Kiểm tra hình ảnh poster/trailer phim hiển thị trên trang chi tiết locator('img').nth(1) with timeout 10000ms
  - waiting for locator('img').nth(1)
    21 × locator resolved to <img class="jss22" alt="video-button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJ…/>
       - unexpected value "hidden"

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
- heading "02.11.2023" [level=4]
- heading "John Cena WWE" [level=1]
- heading "120phút" [level=5]
- text: Mua vé
- progressbar:
  - img
- progressbar:
  - img
- text: "9"
- img "5 Stars"
- tablist:
  - tab "Galaxy Cinema" [selected]:
    - img "Galaxy Cinema"
- tabpanel:
  - heading "GLX - Nguyễn Văn Quá" [level=3]
  - link "12-10-2023 ~ 10:51":
    - /url: /purchase/46577
    - paragraph: 12-10-2023
    - paragraph: ~
    - paragraph: 10:51
```

# Test source

```ts
  1  | import { test, expect } from "../../../fixtures/page-fixture";
  2  | import { verifyImages } from "../../../utils/ImageHelper";
  3  | 
  4  | test.describe("Movie Search & Listing Feature", () => {
  5  | 
  6  |   test.beforeEach(async ({ page }) => {
  7  |     await page.goto("/");
  8  |   });
  9  | 
  10 |   test("D_26: Kiểm tra click vào hình poster hoặc nút 'Mua vé' trên thẻ phim", async ({ page, homePage }) => {
  11 |     const movieListing = homePage.getMovieListingComponent();
  12 |     await movieListing.movieListContainer.scrollIntoViewIfNeeded();
  13 |     const firstCard = await movieListing.getMovieCardByIndex(0);
  14 |     await firstCard.click();
  15 |     await page.waitForTimeout(1000);
  16 |     await expect(page).toHaveURL(/.*detail.*/);
  17 |   });
  18 | 
  19 |   test("D_35: Xem danh sách phim ở trang thứ 2, chọn phim John Cena WWE và kiểm tra hình ảnh poster/trailer phim", async ({ page, homePage }) => {
  20 |     const movieListing = homePage.getMovieListingComponent();
  21 | 
  22 |     // 1. Cuộn tới khu vực danh sách phim
  23 |     await movieListing.movieListContainer.scrollIntoViewIfNeeded();
  24 |     await expect(movieListing.movieListContainer).toBeVisible();
  25 | 
  26 |     // 2. Chuyển sang trang thứ 2 trong danh sách phim (Pagination)
  27 |     const page2Btn = page.locator('.ant-pagination-item-2, [title="2"], button:has-text("2"), a:has-text("2")').first();
  28 |     if (await page2Btn.isVisible()) {
  29 |       await page2Btn.click();
  30 |     } else if (await movieListing.nextPaginationBtn.isVisible()) {
  31 |       await movieListing.clickNextPagination();
  32 |     }
  33 |     await page.waitForTimeout(1000);
  34 | 
  35 |     // 3. Chọn phim "John Cena WWE" hoặc chuyển sang trang chi tiết /detail/11413
  36 |     const targetMovie = page.getByText(/John Cena/i).first();
  37 |     if (await targetMovie.isVisible()) {
  38 |       await targetMovie.click();
  39 |     } else {
  40 |       await page.goto("https://demo1.cybersoft.edu.vn/detail/11413");
  41 |     }
  42 | 
  43 |     await page.waitForTimeout(1000);
  44 | 
  45 |     // 4. Kiểm tra thông tin phim John Cena WWE
  46 |     await expect(page.getByText(/John Cena WWE/i).first()).toBeVisible();
  47 | 
  48 |     // 5. Kiểm tra hình ảnh poster / trailer của phim trên trang chi tiết
  49 |     const moviePosterImg = page.locator('img').nth(1);
> 50 |     await expect(moviePosterImg, "Kiểm tra hình ảnh poster/trailer phim hiển thị trên trang chi tiết").toBeVisible();
     |                                                                                                        ^ Error: Kiểm tra hình ảnh poster/trailer phim hiển thị trên trang chi tiết
  51 |     await verifyImages(page, moviePosterImg);
  52 |   });
  53 | 
  54 |   test("D_36: Kiểm tra logo hiển thị tại màn hình chi tiết phim John Cena WWE", async ({ page, homePage, topBarComponent }) => {
  55 |     const movieListing = homePage.getMovieListingComponent();
  56 | 
  57 |     // 1. Cuộn tới khu vực danh sách phim
  58 |     await movieListing.movieListContainer.scrollIntoViewIfNeeded();
  59 |     await expect(movieListing.movieListContainer).toBeVisible();
  60 | 
  61 |     // 2. Chuyển sang trang thứ 2 trong danh sách phim (Pagination)
  62 |     const page2Btn = page.locator('.ant-pagination-item-2, [title="2"], button:has-text("2"), a:has-text("2")').first();
  63 |     if (await page2Btn.isVisible()) {
  64 |       await page2Btn.click();
  65 |     } else if (await movieListing.nextPaginationBtn.isVisible()) {
  66 |       await movieListing.clickNextPagination();
  67 |     }
  68 |     await page.waitForTimeout(1000);
  69 | 
  70 |     // 3. Chọn phim "John Cena WWE" hoặc chuyển sang trang chi tiết /detail/11413
  71 |     const targetMovie = page.getByText(/John Cena/i).first();
  72 |     if (await targetMovie.isVisible()) {
  73 |       await targetMovie.click();
  74 |     } else {
  75 |       await page.goto("https://demo1.cybersoft.edu.vn/detail/11413");
  76 |     }
  77 | 
  78 |     await page.waitForTimeout(1000);
  79 | 
  80 |     // 4. Kiểm tra logo CyberSoft hiển thị tại màn hình chi tiết phim
  81 |     const logo = await topBarComponent.getLogoLocator();
  82 |     await expect(logo, "Kiểm tra logo CyberSoft hiển thị tại màn hình chi tiết phim").toBeVisible();
  83 |     await verifyImages(page, logo);
  84 |   });
  85 | 
  86 | });
  87 | 
```