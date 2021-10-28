import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/buy-tshirt.spec.js' ],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 10000,

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
