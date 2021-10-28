import { $, browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, SummaryStepPage,
  PaymentStepPage, OrderSummaryPage, BankPaymentPage
} from '../src/page';

describe('Buy a t-shirt', () => {

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
  const EC = browser.ExpectedConditions;

  it('then should be bought a t-shirt', async () => {

    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await productListPage.addProductToCart();
    const selector1 = '[style*="display: block;"] .button-container > a';
    await browser.wait(EC.elementToBeClickable($(selector1)), 10000);
    await productAddedModalPage.goToSummaryStep();
    const selector2 = '.cart_navigation span';
    await browser.wait(EC.elementToBeClickable($(selector2)), 10000);
    await summaryStepPage.goToSignInStep();

    await signInStepPage.signInToAddressStep();

    await addressStepPage.goToShippingStep();
    await shippingStepPage.goToPaymentStep();
    await paymentStepPage.goToBankPaymentPage();
    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.'
    );
  });
});
