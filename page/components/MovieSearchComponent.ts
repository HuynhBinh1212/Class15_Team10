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

    constructor(page: Page) {
        super(page);
        this.ddlPhim = page.locator('text=Phim'); // Default locators, adjust as per DOM
        this.ddlRap = page.locator('text=Rạp');
        this.ddlNgayGioChieu = page.locator('text=Ngày giờ chiếu');
        this.btnMuaVeNgay = page.getByRole("button", {name: "MUA VÉ NGAY", exact: false});
        this.optionList = page.locator('.dropdown-menu, .ant-select-dropdown, ul[role="listbox"]').locator('li, .ant-select-item, [role="option"]');
        this.searchInput = page.locator('input[type="text"].ant-select-selection-search-input, input[placeholder="Tìm kiếm phim"]');
    }

    async clickDropdown(dropdownLocator: Locator, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(dropdownLocator, timeOut);
    }

    async selectOption(optionName: string, timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        const option = this.optionList.filter({ hasText: optionName }).first();
        await this.click(option, timeOut);
    }

    async clickMuaVeNgay(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.btnMuaVeNgay, timeOut);
    }
}
