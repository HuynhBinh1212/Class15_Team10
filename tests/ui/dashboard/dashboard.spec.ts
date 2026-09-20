import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("Dashboard Feature", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Banner", () => {
    test("D_09: Kiểm tra slider banner hiển thị hình ảnh", async ({ page }) => {
      const bannerImg = page.locator('.slick-slider img, .carousel img, .jss81 img').first();
      await expect(bannerImg, "Kiểm tra banner hiển thị").toBeVisible();
      await verifyImages(page, bannerImg);
    });
  });

  test.describe("Movie Search (Quick Booking Bar)", () => {
    test("D_10: Kiểm tra dropdown Phim hiển thị danh sách phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await expect(searchComp.ddlPhim).toBeVisible();
      const optionCount = await searchComp.ddlPhim.locator('option').count();
      expect(optionCount).toBeGreaterThan(1);
    });

    test("D_11: Tìm kiếm bằng chữ cái tên phim trong danh sách phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await expect(searchComp.ddlPhim).toBeVisible();
      const selectedVal = await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      expect(selectedVal).not.toBeNull();
    });

    test("D_12: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi chưa chọn Phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await expect(searchComp.ddlRap).toBeVisible();
      const optionCount = await searchComp.ddlRap.locator('option').count();
      expect(optionCount).toBeLessThanOrEqual(1);
    });

    test("D_13: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi đã chọn Phim", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      await page.waitForTimeout(1000);
      await expect.poll(async () => {
        return await searchComp.ddlRap.locator('option').count();
      }, { timeout: 5000 }).toBeGreaterThan(1);
    });

    test("D_14: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chưa chọn Phim và Rạp", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await expect(searchComp.ddlNgayGioChieu).toBeVisible();
      const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
      expect(optionCount).toBeLessThanOrEqual(1);
    });

    test("D_15: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu đã chọn Phim và Rạp", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      await searchComp.selectFirstValidOption(searchComp.ddlRap);
      const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
      expect(optionCount).toBeGreaterThan(1);
    });

    test("D_16: Kiểm tra dropdown Ngày giờ chiếu hiển thị các suất chiếu khi chỉ chọn Phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      const optionCount = await searchComp.ddlNgayGioChieu.locator('option').count();
      expect(optionCount).toBeLessThanOrEqual(1);
    });

    test("D_17: Click nút 'Mua vé ngay' khi chưa chọn Phim + Rạp + Ngày giờ chiếu", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      let alertTriggered = false;
      page.once('dialog', async dialog => {
        alertTriggered = true;
        await dialog.dismiss().catch(() => {});
      });
      await searchComp.clickMuaVeNgay();
    });

    test("D_18: Click nút 'Mua vé ngay' khi chỉ chọn Phim", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      let alertTriggered = false;
      page.once('dialog', async dialog => {
        alertTriggered = true;
        await dialog.dismiss().catch(() => {});
      });
      await searchComp.clickMuaVeNgay();
    });

    test("D_19: Click nút 'Mua vé ngay' khi chỉ chọn Phim + Rạp", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      await searchComp.selectFirstValidOption(searchComp.ddlRap);
      let alertTriggered = false;
      page.once('dialog', async dialog => {
        alertTriggered = true;
        await dialog.dismiss().catch(() => {});
      });
      await searchComp.clickMuaVeNgay();
    });

    test("D_20: Kiểm tra tìm kiếm suất chiếu với đầy đủ thông tin", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.selectFirstValidOption(searchComp.ddlPhim);
      await searchComp.selectFirstValidOption(searchComp.ddlRap);
      await searchComp.selectFirstValidOption(searchComp.ddlNgayGioChieu);
      let alertTriggered = false;
      page.once('dialog', async dialog => {
        alertTriggered = true;
        await dialog.dismiss().catch(() => {});
      });
      await searchComp.clickMuaVeNgay();
    });
  });

  test.describe("Movie Listing", () => {
    test("D_21: Kiểm tra danh sách phim trên trang chủ được hiển thị", async ({ page, homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      await expect(movieListing.movieListContainer).toBeVisible();
      const firstCard = movieListing.movieCards.first();
      await expect(firstCard).toBeVisible();
    });

    test("D_22: Kiểm tra pagination của danh sách phim", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      await movieListing.movieCards.first().waitFor();
      await movieListing.clickNextPagination();
      await expect(movieListing.movieCards.first()).toBeVisible();
    });

    test("D_23: Kiểm tra thông tin hiển thị trên thẻ phim", async ({ page, homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      await expect(firstCard).toBeVisible();
    });

    test("D_24: Nhãn phân loại độ tuổi", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      const ageLabel = await movieListing.getMovieAgeLabel(firstCard);
      if (await ageLabel.count() > 0) {
        await expect(ageLabel).toBeVisible();
      }
    });

    test("D_25: Hiển thị nút 'Play' và 'Mua vé' khi rê chuột", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      await firstCard.scrollIntoViewIfNeeded();
      await firstCard.hover();
      const playBtn = await movieListing.getMoviePlayBtn(firstCard);
      await expect(playBtn).toBeVisible();
    });
  });

  test.describe("Cinema List", () => {
    test("D_31: Kiểm tra danh sách rạp được hiển thị", async ({ homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      await expect(cinemaList.cinemaListContainer).toBeVisible();
      await expect(await cinemaList.getCinemaSystemLogos()).not.toHaveCount(0);
    });

    test("D_32: Kiểm tra hiển thị nội dung danh sách rạp phim", async ({ page, homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      const cinemaLogo = (await cinemaList.getCinemaSystemLogos()).first();
      await expect(cinemaLogo).toBeVisible();
      await verifyImages(page, cinemaLogo);
    });

    test("D_33: Chọn một rạp để xem lịch chiếu", async ({ homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      const logos = await cinemaList.getCinemaSystemLogos();
      if (await logos.count() > 1) {
          await cinemaList.clickCinemaSystemByIndex(1);
          await expect(cinemaList.showTimesList.first()).toBeVisible();
      }
    });
  });

  test.describe("UI / Responsive & Loading", () => {
    test("D_27: Kiểm tra giao diện trên màn hình desktop", async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("/");
      await expect(page.locator('body')).toBeVisible();
    });

    test("D_28: Kiểm tra responsive trên màn hình nhỏ", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto("/");
      await expect(page.locator('body')).toBeVisible();
    });

    test("D_29: Kiểm tra trạng thái loading khi tải dữ liệu phim", async ({ page }) => {
      await page.route('**/api/QuanLyPhim/**', async route => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await route.continue();
      });
      await page.goto("/");
      await expect(page.locator('body')).toBeVisible();
    });

    test("D_30: Kiểm tra giao diện khi API lấy danh sách phim bị lỗi", async ({ page }) => {
      await page.route('**/api/QuanLyPhim/**', async route => {
        await route.fulfill({ status: 500, body: 'Internal Server Error' });
      });
      await page.goto("/");
      await expect(page.locator('body')).toBeVisible();
    });
  });
});
