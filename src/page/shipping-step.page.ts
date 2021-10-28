import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkBox: ElementFinder;
  private checkoutButton: ElementFinder;

  constructor () {
    this.checkBox = $('#cgv');
    this.checkoutButton = $('#form > p > button > span');
  }

  public async goToPaymentStep(): Promise<void> {
    await this.checkBox.click();
    await this.checkoutButton.click();
  }
}
