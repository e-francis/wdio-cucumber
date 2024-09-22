import androidLocators from "../src/utils/locators/locators.android.json";
import iosLocators from "../src/utils/locators/locators.ios.json";

export const locators =
    process.env.PLATFORM === "ios" ? iosLocators : androidLocators;
