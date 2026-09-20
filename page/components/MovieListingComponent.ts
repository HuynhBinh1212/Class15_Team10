import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class MovieListingComponent extends BasePage {
    readonly movieListContainer: Locator;
    readonly movieCards: Locator;
    readonly nextPaginationBtn: Locator;
    readonly activePaginationBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.movieListContainer = page.locator('.jss81, #lichChieu, .movie-list').first(); 
        this.movieCards = page.locator('.MuiGrid-item:has(a[href*="/detail/"]), a[href*="/detail/"]'); 
        this.nextPaginationBtn = page.locator('button.jss90, .pagination-next, [aria-label="Next page"], .ant-pagination-next').last();
        this.activePaginationBtn = page.locator('.ant-pagination-item-active, .active, .current-page, button.jss90.jss92');
    }

    async getMovieCardByIndex(index: number): Promise<Locator> {
        return this.movieCards.nth(index);
    }

    async getMoviePoster(card: Locator): Promise<Locator> {
        const bgDiv = card.locator('div.jss194, img');
        if (await bgDiv.count() > 0) return bgDiv.first();
        return card;
    }

    async getMovieTitle(card: Locator): Promise<Locator> {
        return card.locator('.jss200, .movie-name, h3, .title').first();
    }

    async getMovieDescription(card: Locator): Promise<Locator> {
        return card.locator('h4.jss202, .description, p').first();
    }

    async getMovieAgeLabel(card: Locator): Promise<Locator> {
        return card.locator('span.jss201, .c18, .rating-badge').first();
    }

    async getMoviePlayBtn(card: Locator): Promise<Locator> {
        return card.locator('button.jss196, .play-btn, button:has-text("Play"), button').first();
    }

    async getMovieBuyTicketBtn(card: Locator): Promise<Locator> {
        return card.locator('a.jss203, .btn-buy-ticket, a:has-text("MUA VÉ")').first();
    }

    async clickNextPagination(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        if (await this.nextPaginationBtn.isVisible()) {
            await this.click(this.nextPaginationBtn, timeOut);
        }
    }
}
