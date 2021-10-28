import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkoutButton = $('.cart_navigation span');
  }

  public async goToSignInStep(): Promise<void> {
    await this.checkoutButton.click();
  }
}
