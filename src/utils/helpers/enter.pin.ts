import { locators } from "../../../config/environment.ts";

export default class EnterPin {
  private readonly locators = locators;

  private readonly elements: { [key: string]: () => any } = {
    pinField1: () => $(this.locators.pinElements.inputOne),
    pinField2: () => $(this.locators.pinElements.inputTwo),
    pinField3: () => $(this.locators.pinElements.inputThree),
    pinField4: () => $(this.locators.pinElements.inputFour),
  };

  async enterPin(pin: string) {
    for (const [index, digit] of pin.split("").entries()) {
      await this.elements[`otpField`]().clear();
      await this.elements[`otpField${index + 1}`]().setValue(digit);
    }
  }
}
