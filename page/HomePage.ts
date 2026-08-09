import { Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { MovieSearchComponent } from "./components/MovieSearchComponent";
import { MovieListingComponent } from "./components/MovieListingComponent";
import { CinemaListComponent } from "./components/CinemaListComponent";

export class HomePage extends CommonPage {
    private movieSearchComponent: MovieSearchComponent;
    private movieListingComponent: MovieListingComponent;
    private cinemaListComponent: CinemaListComponent;

    constructor(page: Page) {
        super(page);
        this.movieSearchComponent = new MovieSearchComponent(page);
        this.movieListingComponent = new MovieListingComponent(page);
        this.cinemaListComponent = new CinemaListComponent(page);
    }

    getMovieSearchComponent() {
        return this.movieSearchComponent;
    }

    getMovieListingComponent() {
        return this.movieListingComponent;
    }

    getCinemaListComponent() {
        return this.cinemaListComponent;
    }
}