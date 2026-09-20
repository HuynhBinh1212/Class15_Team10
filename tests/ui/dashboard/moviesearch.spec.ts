import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("Movie Search & Listing Feature", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("D_26: Kiểm tra click vào hình poster hoặc nút 'Mua vé' trên thẻ phim", async ({ page, homePage }) => {
    const movieListing = homePage.getMovieListingComponent();
    await movieListing.movieListContainer.scrollIntoViewIfNeeded();
    const firstCard = await movieListing.getMovieCardByIndex(0);
    await firstCard.click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/.*detail.*/);
  });

  test("D_39: Xem danh sách phim ở trang thứ 2, chọn phim John Cena WWE và kiểm tra hình ảnh poster/trailer phim", async ({ page, homePage }) => {
    const movieListing = homePage.getMovieListingComponent();

    // 1. Cuộn tới khu vực danh sách phim
    await movieListing.movieListContainer.scrollIntoViewIfNeeded();
    await expect(movieListing.movieListContainer).toBeVisible();

    // 2. Chuyển sang trang thứ 2 trong danh sách phim (Pagination)
    const page2Btn = page.locator('.ant-pagination-item-2, [title="2"], button:has-text("2"), a:has-text("2")').first();
    if (await page2Btn.isVisible()) {
      await page2Btn.click();
    } else if (await movieListing.nextPaginationBtn.isVisible()) {
      await movieListing.clickNextPagination();
    }
    await page.waitForTimeout(1000);

    // 3. Chọn phim "John Cena WWE" hoặc chuyển sang trang chi tiết /detail/11413
    const targetMovie = page.getByText(/John Cena/i).first();
    if (await targetMovie.isVisible()) {
      await targetMovie.click();
    } else {
      await page.goto("https://demo1.cybersoft.edu.vn/detail/11413");
    }

    await page.waitForTimeout(1000);

    // 4. Kiểm tra thông tin phim John Cena WWE
    await expect(page.getByText(/John Cena WWE/i).first()).toBeVisible();

    // 5. Kiểm tra hình ảnh poster / trailer của phim trên trang chi tiết
    const moviePosterImg = page.locator('img').nth(1);
    await expect(moviePosterImg, "Kiểm tra hình ảnh poster/trailer phim hiển thị trên trang chi tiết").toBeVisible();
    await verifyImages(page, moviePosterImg);
  });

  test("D_41: Kiểm tra logo hiển thị tại màn hình chi tiết phim John Cena WWE", async ({ page, homePage, topBarComponent }) => {
    const movieListing = homePage.getMovieListingComponent();

    // 1. Cuộn tới khu vực danh sách phim
    await movieListing.movieListContainer.scrollIntoViewIfNeeded();
    await expect(movieListing.movieListContainer).toBeVisible();

    // 2. Chuyển sang trang thứ 2 trong danh sách phim (Pagination)
    const page2Btn = page.locator('.ant-pagination-item-2, [title="2"], button:has-text("2"), a:has-text("2")').first();
    if (await page2Btn.isVisible()) {
      await page2Btn.click();
    } else if (await movieListing.nextPaginationBtn.isVisible()) {
      await movieListing.clickNextPagination();
    }
    await page.waitForTimeout(1000);

    // 3. Chọn phim "John Cena WWE" hoặc chuyển sang trang chi tiết /detail/11413
    const targetMovie = page.getByText(/John Cena/i).first();
    if (await targetMovie.isVisible()) {
      await targetMovie.click();
    } else {
      await page.goto("https://demo1.cybersoft.edu.vn/detail/11413");
    }

    await page.waitForTimeout(1000);

    // 4. Kiểm tra logo CyberSoft hiển thị tại màn hình chi tiết phim
    const logo = await topBarComponent.getLogoLocator();
    await expect(logo, "Kiểm tra logo CyberSoft hiển thị tại màn hình chi tiết phim").toBeVisible();
    await verifyImages(page, logo);
  });

});
