import { RegisterPage } from "../page/RegisterPage";
import { LoginPage } from "../page/LoginPage";
import { HomePage } from "./../page/HomePage";
import { TinTucPage } from "../page/components/TinTucPage";
import { CommonPage } from "../page/CommonPage";
import { TopBarComponent } from "../page/components/HeaderComponents";
import { test as base } from "@playwright/test";

export type MyFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  tinTucPage: TinTucPage;
  commonPage: CommonPage;
  headerPage: TopBarComponent;
  topBarComponent: TopBarComponent;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  tinTucPage: async ({ page }, use) => {
    const tinTucPage = new TinTucPage(page);
    await use(tinTucPage);
  },

  commonPage: async ({ page }, use) => {
    const commonPage = new CommonPage(page);
    await use(commonPage);
  },

  headerPage: async ({ page }, use) => {
    const headerPage = new TopBarComponent(page);
    await use(headerPage);
  },

  topBarComponent: async ({ page }, use) => {
    const topBarComponent = new TopBarComponent(page);
    await use(topBarComponent);
  },
});

export { expect } from "@playwright/test";
