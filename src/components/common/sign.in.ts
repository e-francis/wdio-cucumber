import { autoInjectable } from "tsyringe";
import { locators } from "../../../config/environment.ts";
import { otp } from "../../test-data/test.data.json";
import EnterOTP from "../../utils/helpers/enter.otp.ts";

@autoInjectable()
export default class SignIn {
    private readonly locators = locators;

    private readonly elements = {
        grantPermissionButton: () =>
            $(this.locators.commonElements.grantPermissionButton),
        allowButton: () => $(this.locators.commonElements.allowButton),
        mobileNumberInputField: () =>
            $(this.locators.signInElements.mobileNumberInputfield),
        pinInputField: () => $(this.locators.signInElements.pinInputfield),
        signInButton: () => $(this.locators.signInElements.signInButton),
        checkBox: () => $(this.locators.signInElements.checkBox),
        continueButton: () => $(this.locators.signInElements.continueButton),
        notNowButton: () => $(this.locators.signInElements.notNowButton),
        homeScreenText: () => $(this.locators.signInElements.homeScreenText),
        unlinkDeviceButton: () =>
            $(this.locators.commonElements.unlinkDeviceButton),
        otpScreenText: () => $(this.locators.signInElements.otpScreenText),
    };

    async signInWithPin(mobileNumber: string, pin: string) {
        const enterOtp = new EnterOTP();
        await this.elements.grantPermissionButton().click();
        await this.elements.allowButton().click();
        await this.elements.mobileNumberInputField().addValue(mobileNumber);
        await this.elements.pinInputField().addValue(pin);
        await this.elements.signInButton().click();

        const unlinkDevicePromise = this.elements
            .unlinkDeviceButton()
            .waitForDisplayed({ timeout: 60000 })
            .then(() => "unlink")
            .catch(() => null);

        const checkBoxPromise = this.elements
            .checkBox()
            .waitForDisplayed({ timeout: 60000 })
            .then(() => "checkbox")
            .catch(() => null);

        const otpScreenPromise = this.elements
            .otpScreenText()
            .waitForDisplayed({ timeout: 60000 })
            .then(() => "otpScreen")
            .catch(() => null);

        const firstVisibleElement = await Promise.race([
            unlinkDevicePromise,
            checkBoxPromise,
            otpScreenPromise,
        ]);

        if (firstVisibleElement === "unlink") {
            await this.elements.unlinkDeviceButton().click();
            await this.elements
                .otpScreenText()
                .waitForDisplayed({ timeout: 60000 });
            await browser.pause(7000);
            await enterOtp.enterOtp(otp);
            await this.elements.checkBox().waitForDisplayed({ timeout: 60000 });
            await this.elements.checkBox().click();
        } else if (firstVisibleElement === "otpScreen") {
            await browser.pause(500);
            await enterOtp.enterOtp(otp);
            await this.elements.checkBox().click();
        } else if (firstVisibleElement === "checkbox") {
            await this.elements.checkBox().click();
        } else {
            await enterOtp.enterOtp(otp);
        }
    }

    async verifySuccessfulSignIn() {
        await this.elements.continueButton().click();
        await this.elements.notNowButton().click();
        await expect(this.elements.homeScreenText()).toBeDisplayed();
    }
}
