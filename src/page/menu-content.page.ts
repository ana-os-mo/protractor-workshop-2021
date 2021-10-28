import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu.sf-contener.clearfix.col-lg-12 ul.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows li a');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
