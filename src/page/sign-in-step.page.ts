import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailForm: ElementFinder;
  private passwordForm: ElementFinder;
  private login: ElementFinder;

  constructor () {
    this.emailForm = $('#email');
    this.passwordForm = $('#passwd');
    this.login = $('#SubmitLogin > span');
  }

  public async signInToAddressStep(): Promise<void> {
    await this.emailForm.sendKeys('aperdomobo@gmail.com');
    await this.passwordForm.sendKeys('WorkshopProtractor');
    await this.login.click();
  }
}
