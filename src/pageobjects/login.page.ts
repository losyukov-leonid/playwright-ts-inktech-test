import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  override pageUrl = '/login';
  headerLogo = this.page.locator('a.header-logo');
  authFormHeader = this.page.locator('h1');
  invalidCredentialsErrorAlert = this.page.locator(
    '//div[@role="alert" and contains(text(),"Incorrect username or password.")]/ancestor::div[contains(@class, "flash-error")]'
  );
  dismissAlertMessageBtn = this.page.locator(
    '//div[@role="alert" and contains(text(),"Incorrect username or password.")]/preceding-sibling::button'
  );
  loginFieldLabel = this.page.locator('//label[@for="login_field"]');
  loginInput = this.page.locator('//input[@name="login"]');
  passwordFieldLabel = this.page.locator('//label[@for="password"]');
  forgotPasswordLink = this.page.locator('a#forgot-password');
  passwordInput = this.page.locator('//input[@name="password"]');
  signInBtn = this.page.locator('//input[@name="commit" and @type="submit"]');
  signInWithPasskeyBtn = this.page.locator('//span[text()="Sign in with a passkey"]/ancestor::button[not(@data-retry-message)]');
  createAnAccountLink = this.page.locator('//a[@href="/signup?source=login"]');
  footer = this.page.locator('div.footer');

  async fillLogin(login: string) {
    await this.fillText(this.loginInput, login);
  }

  async fillPassword(password: string) {
    await this.fillText(this.passwordInput, password);
  }

  async clickSignInBtn() {
    await this.clickOnElement(this.signInBtn);
  }

  async signIn(login: string, password: string) {
    await this.fillLogin(login);
    await this.fillPassword(password);
    await this.clickSignInBtn();
  }

  async expectPageElementsVisible() {
    await this.expectElementVisible(this.headerLogo);
    await this.expectElementVisible(this.authFormHeader);
    await this.expectElementVisible(this.loginFieldLabel);
    await this.expectElementVisible(this.loginInput);
    await this.expectElementVisible(this.passwordFieldLabel);
    await this.expectElementVisible(this.forgotPasswordLink);
    await this.expectElementVisible(this.passwordInput);
    await this.expectElementVisible(this.signInBtn);
    await this.expectElementVisible(this.signInWithPasskeyBtn);
    await this.expectElementVisible(this.createAnAccountLink);
    await this.expectElementVisible(this.footer);
  }
}
