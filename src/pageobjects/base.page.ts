import { expect, Page, Locator } from '@playwright/test';

export class BasePage {
  page: Page;
  pageUrl = '';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto(this.pageUrl);
  }

  async fillText(element: Locator, text: string) {
    await element.fill(text);
  }

  async clickOnElement(element: Locator) {
    await element.click();
  }

  async expectElementVisible(element: Locator, visible = true) {
    await expect(element).toBeVisible({ visible });
  }
}
