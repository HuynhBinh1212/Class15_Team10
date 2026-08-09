import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class TopBarComponent extends BasePage {
    readonly logo: Locator;
    readonly lnkLichChieu: Locator;
    readonly lnkCumRap: Locator;
    readonly lnkTinTuc: Locator;
    readonly lnkUngDung: Locator;
    readonly lnkRegister: Locator;
    readonly lnkLogin: Locator;

    constructor(page: Page) {
        super(page);
        this.logo = page.locator('img[src*="logo.png"], img[src="./logo.png"]');
        this.lnkLichChieu = page.getByText(/Lịch chiếu/i).first();
        this.lnkCumRap = page.getByText(/Cụm rạp/i).first();
        this.lnkTinTuc = page.getByText(/Tin tức/i).first();
        this.lnkUngDung = page.getByText(/Ứng dụng/i).first();
        this.lnkRegister = page.getByRole("link", {name: "Đăng ký"});
        this.lnkLogin =  page.getByRole("link", {name: "Đăng nhập"});
    }

    async getLogoLocator() {
        return this.logo;
    }

    async getMenuLocator(menuName: "Lịch chiếu" | "Cụm rạp" | "Tin tức" | "Ứng dụng") {
        switch(menuName) {
            case "Lịch chiếu": return this.lnkLichChieu;
            case "Cụm rạp": return this.lnkCumRap;
            case "Tin tức": return this.lnkTinTuc;
            case "Ứng dụng": return this.lnkUngDung;
        }
    }

    async navigateToMenu(
        menuName: "Lịch chiếu" | "Cụm rạp" | "Tin tức" | "Ứng dụng",
        timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
    ) {
        const menu = await this.getMenuLocator(menuName);
        await this.click(menu, timeOut);
    }

     async navigateToRegisterPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.lnkRegister, timeOut);
  }

  async navigateToLoginPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.lnkLogin, timeOut);
  }
}