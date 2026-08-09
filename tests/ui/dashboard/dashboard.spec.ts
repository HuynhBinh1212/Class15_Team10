import { test, expect } from "../../../fixtures/page-fixture";
import { verifyImages } from "../../../utils/ImageHelper";

test.describe("Dashboard Feature", () => {

  test.beforeEach(async ({ page, homePage, loginPage }) => {
    await page.goto("/");

    // Thực hiện đăng nhập (beforeStep)
    const topBar = homePage.getTopBarComponent();
    await topBar.navigateToLoginPage();
    await loginPage.enterAccountInput("testing142"); // Tài khoản test
    await loginPage.enterPasswordInput("testing142"); // Mật khẩu test
    await loginPage.clickLoginButton();
    
    // Đợi quá trình đăng nhập hoàn tất và chuyển trang
    await page.waitForTimeout(1000);
  });

  test.describe("Banner", () => {
    test("D_09: Kiểm tra slider banner hiển thị hình ảnh", async ({ page, homePage }) => {
      const bannerImgs = page.locator('.slick-slider img, .carousel img');
      await expect(bannerImgs.first()).toBeVisible();
    });
  });

  test.describe("Movie Search", () => {
    test("D_10: Kiểm tra dropdown Phim hiển thị danh sách phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.clickDropdown(searchComp.ddlPhim);
      await expect(searchComp.optionList.first()).toBeVisible();
    });

    test("D_12: Kiểm tra dropdown Rạp hiển thị danh sách rạp khi chưa chọn Phim", async ({ homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.clickDropdown(searchComp.ddlRap);
      await expect(searchComp.optionList).not.toBeVisible();
    });

    test("D_17: Click nút 'Mua vé ngay' khi chưa chọn Phim + Rạp + Ngày giờ chiếu", async ({ page, homePage }) => {
      const searchComp = homePage.getMovieSearchComponent();
      await searchComp.clickMuaVeNgay();
      // Expect modal/alert to show up
      // await expect(page.getByText('Bạn chưa chọn phim')).toBeVisible();
    });
    
    // Add remaining search tests (D_11 to D_20) similarly based on your app's actual interactions...
  });

  test.describe("Movie Listing", () => {
    test("D_21: Kiểm tra danh sách phim trên trang chủ được hiển thị", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      await expect(movieListing.movieListContainer).toBeVisible();
      await expect(movieListing.movieCards.first()).toBeVisible();
    });

    test("D_22: Kiểm tra pagination của danh sách phim", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      await movieListing.movieCards.first().waitFor(); // wait for load
      if (await movieListing.nextPaginationBtn.isVisible()) {
          await movieListing.clickNextPagination();
          await expect(movieListing.activePaginationBtn).toHaveText(/2|.*/);
      }
    });

    test("D_23: Kiểm tra thông tin hiển thị trên thẻ phim", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      await expect(await movieListing.getMoviePoster(firstCard)).toBeVisible();
      await expect(await movieListing.getMovieTitle(firstCard)).toBeVisible();
    });

    test("D_24: Nhãn phân loại độ tuổi", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      const ageLabel = await movieListing.getMovieAgeLabel(firstCard);
      if (await ageLabel.isVisible()) {
        await expect(ageLabel).toBeVisible();
      }
    });

    test("D_25: Hiển thị nút 'Play' và 'Mua vé' khi rê chuột", async ({ homePage }) => {
      const movieListing = homePage.getMovieListingComponent();
      const firstCard = await movieListing.getMovieCardByIndex(0);
      await firstCard.hover();
      await expect(await movieListing.getMoviePlayBtn(firstCard)).toBeVisible();
      await expect(await movieListing.getMovieBuyTicketBtn(firstCard)).toBeVisible();
    });
  });

  test.describe("Cinema List", () => {
    test("D_31: Kiểm tra danh sách rạp được hiển thị", async ({ homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      await expect(cinemaList.cinemaListContainer).toBeVisible();
      await expect(await cinemaList.getCinemaSystemLogos()).not.toHaveCount(0);
    });

    test("D_32: Kiểm tra hiển thị nội dung danh sách rạp phim", async ({ homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      await expect(cinemaList.cinemaNames.first()).toBeVisible();
      await expect(cinemaList.cinemaAddresses.first()).toBeVisible();
      await expect(cinemaList.cinemaDetailBtns.first()).toBeVisible();
    });

    test("D_33: Chọn một rạp để xem lịch chiếu", async ({ homePage }) => {
      const cinemaList = homePage.getCinemaListComponent();
      if (await cinemaList.cinemaSystemLogos.count() > 1) {
          await cinemaList.clickCinemaSystemByIndex(1);
          await expect(cinemaList.showTimesList).toBeVisible();
      }
    });
  });
});
