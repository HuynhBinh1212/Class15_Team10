import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class MovieSearchComponent extends BasePage {
    readonly ddlPhim: Locator;
    readonly ddlRap: Locator;
    readonly ddlNgayGioChieu: Locator;
    readonly btnMuaVeNgay: Locator;
    
    // For handling dropdown selections
    readonly optionList: Locator;
    readonly searchInput: Locator;

    readonly btnNextPagination: Locator;
    readonly movieListContainer: Locator;

    constructor(page: Page) {
        super(page);
        this.ddlPhim = page.locator('select[name="film"]');
        this.ddlRap = page.locator('select[name="cinema"]');
        this.ddlNgayGioChieu = page.locator('select[name="date"]');
        this.btnMuaVeNgay = page.locator('button.jss191, button:has-text("MUA VÉ NGAY")').first();
        this.optionList = page.locator('select[name="film"] option, select[name="cinema"] option, select[name="date"] option');
        this.searchInput = page.locator('select[name="film"]');
        this.btnNextPagination = page.locator('button.jss90').last();
        this.movieListContainer = page.locator('.jss81, a[href*="/detail/"]');
    }

    async clickDropdown(dropdownLocator: Locator, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await dropdownLocator.waitFor({ state: 'visible', timeout: timeOut });
    }

    async selectFirstValidOption(selectLocator: Locator) {
        await selectLocator.waitFor({ state: 'visible' });
        const options = await selectLocator.locator('option').all();
        for (let i = 0; i < options.length; i++) {
            const val = await options[i].getAttribute('value');
            const disabled = await options[i].getAttribute('disabled');
            if (val && disabled === null) {
                await selectLocator.selectOption(val);
                return val;
            }
        }
        if (options.length > 1) {
            const val = await options[1].getAttribute('value');
            if (val) await selectLocator.selectOption(val);
            return val;
        }
        return null;
    }

    async selectOption(optionName: string, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        const option = this.optionList.filter({ hasText: optionName }).first();
        if (await option.isVisible()) {
            await this.click(option, timeOut);
        }
    }

    async clickMuaVeNgay(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.btnMuaVeNgay, timeOut);
    }

    async clickNextPagination(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.btnNextPagination, timeOut);
    }

    async clickMovieCardByName(movieName: string, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.movieListContainer.first(), timeOut);
    }
}
