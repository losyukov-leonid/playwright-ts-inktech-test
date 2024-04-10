import { BasePage } from './base.page';

export class HomePage extends BasePage {
  loggedOutHeader = this.page.locator('header.header-logged-out');
  signInBtn = this.page.locator('//a[@href="/login" and contains(@class, "HeaderMenu-link--sign-in")]');
  signUpBtn = this.page.locator('//a[contains(@href, "/signup")]');
  openGlobalNavMenuBtn = this.page.getByLabel('Open global navigation menu');
}
