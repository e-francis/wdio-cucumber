import { locators } from "../../../config/environment";

export default class EnterOTP {
  private readonly locators = locators;

  private readonly elements = {
    otpField: () => $(this.locators.otpElelments.otpField),
  };

  async enterOtp(otp: string) {
    await browser.waitUntil(() => this.elements.otpField().isDisplayed(), {
      timeout: 60000,
    });
    await this.elements.otpField().addValue(otp);
  }
}
