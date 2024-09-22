import { autoInjectable } from "tsyringe";
import { locators } from "../../../config/environment";
import EnterPin from "../../utils/helpers/enter.pin";
import EnterOTP from "../../utils/helpers/enter.otp";

@autoInjectable()
export default class Payments {
  private readonly locators = locators;

  private readonly elements = {
    paymentNavButton: () => $(this.locators.paymentsElements.paymentNavButton),
    paymentsText: () => $(this.locators.paymentsElements.paymentsText),
    airtimeAndDataButton: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements
          .airtimeAndDataButton
      ),
    phoneNumberInputField: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements
          .phoneNumberInputField
      ),
    proceedButton: () =>
      $(this.locators.paymentsElements.airtimeAndDataElements.proceedButton),
    customAmountButton: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements.customAmountButton
      ),
    customAmountField: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements.customAmountField
      ),
    proceedButton2: () =>
      $(this.locators.paymentsElements.airtimeAndDataElements.proceedButton2),
    reviewDetailstext: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements.reviewDetailstext
      ),
    securePaymentButton: () =>
      $(
        this.locators.paymentsElements.airtimeAndDataElements
          .securePaymentButton
      ),
    invalidOtpText: () =>
      $(this.locators.paymentsElements.airtimeAndDataElements.invalidOtpText),
    invalidPinText: () =>
      $(this.locators.paymentsElements.airtimeAndDataElements.invalidPinText),
    okButton: () => $(this.locators.commonElements.okButton),
  };

  async navigateToPaymentsModule() {
    await this.elements.paymentNavButton().click();
    await expect(this.elements.paymentsText()).toBeDisplayed();
  }

  async purchaseAirtime(
    paymentPhoneNumber: string,
    amount: string,
    pin: string,
    otp: string
  ) {
    const enterPin = new EnterPin();
    const enterOtp = new EnterOTP();
    await this.elements.airtimeAndDataButton().click();
    await this.elements.phoneNumberInputField().setValue(paymentPhoneNumber);
    await this.elements.proceedButton().click();
    await this.elements.customAmountButton().click();
    await this.elements.customAmountField().setValue(amount);
    await this.elements.proceedButton2().click();
    await expect(this.elements.reviewDetailstext()).toBeDisplayed();
    await this.elements.securePaymentButton().click();
    await this.elements.proceedButton2().click();
    await enterPin.enterPin(pin);
    await enterOtp.enterOtp(otp);
  }

  async purchaseAirtimeWithInvalidPinAndOTP(
    paymentPhoneNumber: string,
    amount: string
  ) {
    await this.elements.airtimeAndDataButton().click();
    await this.elements.phoneNumberInputField().setValue(paymentPhoneNumber);
    await this.elements.proceedButton().click();
    await this.elements.customAmountButton().click();
    await this.elements.customAmountField().setValue(amount);
    await this.elements.proceedButton2().click();
    await expect(this.elements.reviewDetailstext()).toBeDisplayed();
    await this.elements.securePaymentButton().click();
  }
  async verifyErrorMessage(
    invalidPin: string,
    pin: string,
    invalidOtp: string
  ) {
    const enterPin = new EnterPin();
    const enterOtp = new EnterOTP();
    await this.elements.proceedButton2().click();
    await enterPin.enterPin(invalidPin);
    await expect(this.elements.invalidPinText()).toBeDisplayed();
    await enterPin.enterPin(pin);
    await enterOtp.enterOtp(invalidOtp);
    await expect(this.elements.invalidOtpText()).toBeDisplayed();
    await this.elements.okButton().click();
  }
}
