import { test as base } from '@playwright/test';
import { LoginPage } from '../pageobjects/login.page';

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

test.describe('Invalid sign in', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo();
    await loginPage.expectPageElementsVisible();
  });

  test.describe('with invalid credentials', () => {
    test.afterEach(async ({ loginPage }) => {
      await loginPage.expectElementVisible(loginPage.invalidCredentialsErrorAlert);
      await loginPage.expectElementVisible(loginPage.dismissAlertMessageBtn);
    });

    test('with valid email and invalid password', async ({ loginPage }) => {
      await loginPage.signIn(process.env.EMAIL!, 'InvalidPass1234');
    });

    test('with invalid email and valid password', async ({ loginPage }) => {
      await loginPage.signIn('invalid.email@gmail.com', process.env.PASSWORD!);
    });

    test('with valid username and invalid password', async ({ loginPage }) => {
      await loginPage.signIn(process.env.USER_NAME!, 'InvalidPass1234');
    });

    test('with invalid username and valid password', async ({ loginPage }) => {
      await loginPage.signIn('some-invalid-username', process.env.PASSWORD!);
    });
  });

  test.describe('with empty credentials', () => {
    test.afterEach(async ({ loginPage }) => {
      await loginPage.expectPageElementsVisible();
    });

    test('with empty login', async ({ loginPage }) => {
      await loginPage.signIn('', process.env.PASSWORD!);
    });

    test('with empty password', async ({ loginPage }) => {
      await loginPage.signIn(process.env.EMAIL!, '');
    });

    test('with empty email and password', async ({ loginPage }) => {
      await loginPage.signIn('', '');
    });
  });
});
