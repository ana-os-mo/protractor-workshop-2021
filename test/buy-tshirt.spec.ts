import { $, browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, SummaryStepPage,
  PaymentStepPage, OrderSummaryPage, BankPaymentPage
} from '../src/page';

describe('carga de pagina', () => {

  it('debe abrir el navegador', async () => {

    await browser.get('http://automationpractice.com/');

  });
});

describe('Proceso de compra de la Camiseta', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const EC = browser.ExpectedConditions;

  it('debe seleccionar producto', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.addProductToCart();
    const selector1 = '[style*="display: block;"] .button-container > a';
    await browser.wait(EC.elementToBeClickable($(selector1)), 10000);
    await productAddedModalPage.goToSummaryStep();
    const selector2 = '.cart_navigation span';
    await browser.wait(EC.elementToBeClickable($(selector2)), 10000);
    await summaryStepPage.goToSignInStep();
  });
});

describe('Logueo y pago', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('debe seleccionar producto', async () => {
    await signInStepPage.signInToAddressStep();

    await addressStepPage.goToShippingStep();
    await shippingStepPage.goToPaymentStep();
    await paymentStepPage.goToBankPaymentPage();
    await bankPaymentPage.confirmOrder();
  });
});

describe('confirmacion de compra', () => {
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('debe mostrar mensajito', async () => {
    await expect(orderSummaryPage.confirmationMessage()).toBe(
      'Your order on My Store is complete.'
    );
  });
});
