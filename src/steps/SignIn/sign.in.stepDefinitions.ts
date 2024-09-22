import { Given, When, Then } from "@wdio/cucumber-framework";
import { container } from "tsyringe";
import App from "../../components/app.ts";
import { mobileNumber, pin } from "../../test-data/test.data.json";

const app = container.resolve(App);

Given(/^on app launch$/, async () => {
    console.log("Entering Launcg");
    await app.launchedApp?.onAppLaunchSignIn();
});

When(/^the user enters mobile number and pin$/, async () => {
    await app.signIn?.signInWithPin(mobileNumber, pin);
});

Then(/^the user should be signed in$/, async () => {
    await app.signIn?.verifySuccessfulSignIn();
});
