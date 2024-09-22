import { locators } from "../../../config/environment.ts";

export default class LaunchedApp {
    private readonly locators = locators;

    private readonly elements = {
        skipButton: () => $(this.locators.commonElements.skipButton),
        createNewAccountButton: () =>
            $(this.locators.onboardingElements.createNewAccountButton),
        signInButton: () => $(this.locators.commonElements.signInButton),
    };
    async onAppLaunchOnboarding() {
        await this.elements.skipButton().click();
        await this.elements.createNewAccountButton().click();
    }
    async onAppLaunchSignIn() {
        await this.elements.skipButton().click();
        await this.elements.signInButton().click();
    }
}
