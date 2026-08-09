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
        this.movieListContainer = page.locator('#lichChieu, .movie-list, .list-movie'); 
        this.movieCards = page.locator('.movie-card, .film-item, .card'); 
        this.nextPaginationBtn = page.locator('.pagination-next, [aria-label="Next page"], .ant-pagination-next');
        this.activePaginationBtn = page.locator('.ant-pagination-item-active, .active, .current-page');
    }

    async getMovieCardByIndex(index: number): Promise<Locator> {
        return this.movieCards.nth(index);
    }

    async getMoviePoster(card: Locator): Promise<Locator> {
        return card.locator('img');
    }

    async getMovieTitle(card: Locator): Promise<Locator> {
        return card.locator('.movie-name, h3, .title');
    }

    async getMovieDescription(card: Locator): Promise<Locator> {
        return card.locator('.description, p, .text-sm');
    }

    async getMovieAgeLabel(card: Locator): Promise<Locator> {
        return card.locator('.age-label, .c18, .rating-badge');
    }

    async getMoviePlayBtn(card: Locator): Promise<Locator> {
        return card.locator('.play-btn, .btn-trailer, button:has-text("Play")');
    }

    async getMovieBuyTicketBtn(card: Locator): Promise<Locator> {
        return card.locator('.btn-buy-ticket, button:has-text("Mua vé"), a:has-text("Mua vé")');
    }

    async clickNextPagination(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
        await this.click(this.nextPaginationBtn, timeOut);
    }
}
