import { test as base } from '@playwright/test';
import { LoginPage } from '../pageobjects/login.page';
import { HomePage } from '../pageobjects/home.page';

const test = base.extend<{ loginPage: LoginPage; homePage: HomePage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  }
});

test.describe('Sign in happy path', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
    await loginPage.expectPageElementsVisible();
  });

  test.afterEach(async ({ homePage }) => {
    await homePage.expectElementVisible(homePage.loggedOutHeader, false);
    await homePage.expectElementVisible(homePage.signInBtn, false);
    await homePage.expectElementVisible(homePage.signUpBtn, false);
    await homePage.expectElementVisible(homePage.openGlobalNavMenuBtn);
  });

  test('with email', async ({ loginPage }) => {
    await loginPage.signIn(process.env.EMAIL!, process.env.PASSWORD!);
  });

  test('with username', async ({ loginPage }) => {
    await loginPage.signIn(process.env.USER_NAME!, process.env.PASSWORD!);
  });
});
