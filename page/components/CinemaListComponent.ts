import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class CinemaListComponent extends BasePage {
    readonly cinemaListContainer: Locator;
    readonly cinemaSystemLogos: Locator;
    readonly cinemaNames: Locator;
    readonly cinemaAddresses: Locator;
    readonly cinemaDetailBtns: Locator;
    readonly showTimesList: Locator;

    constructor(page: Page) {
        super(page);
        this.cinemaListContainer = page.locator('.jss159, #cumRap, .cinema-list-wrapper, .cinema-container').first();
        this.cinemaSystemLogos = page.locator('button.jss161 img, img.MuiAvatar-img, .cinema-system-logo, .logo-rap');
        this.cinemaNames = page.locator('h4.jss165, .cinema-name, .ten-rap');
        this.cinemaAddresses = page.locator('h6.jss166, .cinema-address, .dia-chi');
        this.cinemaDetailBtns = page.locator('a.jss167, .btn-detail, [chi tiết]');
        this.showTimesList = page.locator('.jss171, .jss172, .showtime-list');
    }

    async getCinemaSystemLogos(): Promise<Locator> {
        return this.cinemaSystemLogos;
    }

    async clickCinemaSystemByIndex(index: number, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.cinemaSystemLogos.nth(index), timeOut);
    }
}
