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
        this.cinemaListContainer = page.locator('#cumRap, .cinema-list-wrapper, .cinema-container');
        this.cinemaSystemLogos = this.cinemaListContainer.locator('.cinema-system-logo, .logo-rap, img.logo');
        this.cinemaNames = this.cinemaListContainer.locator('.cinema-name, .ten-rap, h4');
        this.cinemaAddresses = this.cinemaListContainer.locator('.cinema-address, .dia-chi, p');
        this.cinemaDetailBtns = this.cinemaListContainer.locator('.btn-detail, .chi-tiet, a:has-text("Chi tiết")');
        this.showTimesList = this.cinemaListContainer.locator('.showtime-list, .lich-chieu, .time-list');
    }

    async getCinemaSystemLogos(): Promise<Locator> {
        return this.cinemaSystemLogos;
    }

    async clickCinemaSystemByIndex(index: number, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.cinemaSystemLogos.nth(index), timeOut);
    }
}
