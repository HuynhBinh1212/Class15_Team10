import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class TinTucPage extends BasePage {
    readonly tabDienAnh24h: Locator;
    readonly tabReview: Locator;
    readonly tabKhuyenMai: Locator;
    readonly newsImages: Locator;
    readonly btnXemThem: Locator;

    constructor(page: Page) {
        super(page);

        // Sử dụng getByRole hoặc getByText với cờ exact: false để tránh lỗi phân biệt hoa/thường
        this.tabDienAnh24h = this.page.getByText('Điện ảnh 24h', { exact: false }).first();
        this.tabReview = this.page.getByText('Review', { exact: false }).first();
        this.tabKhuyenMai = this.page.getByText('Khuyến Mãi', { exact: false }).first();
        this.newsImages = this.page.locator('img');
        this.btnXemThem = this.page.getByRole('button', { name: 'XEM THÊM', exact: false }).first();
    }

    async clickTabDienAnh24h(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.tabDienAnh24h, timeOut);
    }

    async clickTabReview(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.tabReview, timeOut);
    }

    async clickTabKhuyenMai(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.tabKhuyenMai, timeOut);
    }

    async clickXemThem(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.btnXemThem, timeOut);
    }
}
