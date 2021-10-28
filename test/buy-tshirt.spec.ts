import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage
} from '../src/page';

describe('Buy a t-shirt', () => {

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.addProductToCart();
    await(browser.sleep(10000));
    await productAddedModalPage.goToSummaryStep();
    await(browser.sleep(3000));
    await summaryStepPage.goToSignInStep();
    await(browser.sleep(3000));

    await signInStepPage.signInToAddressStep();
    await(browser.sleep(3000));

    await addressStepPage.goToShippingStep();
    await(browser.sleep(3000));

    await shippingStepPage.goToPaymentStep();
    await(browser.sleep(6000));

    await paymentStepPage.goToBankPaymentPage();
    await(browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.'
    );
  });
});
