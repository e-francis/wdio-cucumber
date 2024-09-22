// import { Given, When, Then } from "@wdio/cucumber-framework";
// import { container } from "tsyringe";
// import App from "../../components/app.ts";
// import {
//     mobileNumber,
//     pin,
//     otp,
//     paymentPhoneNumber,
//     amount,
// } from "../../test-data/test.data.json";

// const app = container.resolve(App);

// Given(/^on app launch$/, async () => {
//     await app.launchedApp?.onAppLaunchSignIn();
//     await app.signIn?.signInWithPin(mobileNumber, pin);
// });

// // Scenario: User should purchase airtime successfully
// When(/^the user is on the payments screen and clicks Airtime$/, async () => {
//     await app.payments?.navigateToPaymentsModule();
// });

// Then(/^they should be able to purchase airtime successfully$/, async () => {
//     await app.payments?.purchaseAirtime(paymentPhoneNumber, amount, pin, otp);
// });

// // Scenario: User should not purchase airtime with invalid OTP
// // When(/^the user is on the payments screen and clicks Airtime$/, async () => {
// //   await app.payments?.navigateToPaymentsModule();
// // });

// // When(/^they try to complete airtime purchase with invalid OTP$/, async () => {
// //   await app.payments?.purchaseAirtimeWithInvalidPinAndOTP(
// //     paymentPhoneNumber,
// //     amount
// //   );
// // });

// // Then(/^they should see an error message$/, async () => {
// //   await app.payments?.verifyErrorMessage(invalidPin, pin, invalidOtp);
// // });

// // Scenario: User should purchase data successfully
// // Then(/^they should be able to purchase data successfully$/, async () => {});

// // // Scenario: User should not purchase data with invalid OTP
// // When(/^they try to complete data purchase with invalid OTP$/, async () => {});

// // Then(/^they should see an error message$/, async () => {});
