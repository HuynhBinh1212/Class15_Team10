import { RegisterPage } from "../page/RegisterPage";
import { LoginPage } from "../page/LoginPage";
import { HomePage } from "./../page/HomePage";
import { test as base } from "@playwright/test";

type MyFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  //thêm các page khác khi mở rộng
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    //set HomePage
    const homePage = new HomePage(page);
    //khai báo sử dụng homePage trong test
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    //set RegisterPage
    const registerPage = new RegisterPage(page);

    await use(registerPage);
  },

  //thêm các page khác khi mở rộng
});

export { expect } from "@playwright/test";
