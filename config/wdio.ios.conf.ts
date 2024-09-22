import { config as sharedConfig } from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
    ...sharedConfig,

    specs: ["../src/features/**/signIn.feature"],

    capabilities: [
        {
            // capabilities for local Appium web tests on iOS
            platformName: "iOS",
            "wdio:maxInstances": 1,
            "appium:deviceName": "iPhone 15",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "XCUITest",
            "appium:platformVersion": "17.0",
            "appium:bundleId": "com.onefi.carbon",
            "appium:newCommandTimeout": 240,
            "appium:wdaLaunchTimeout": 120000,
            "appium:autoAcceptAlerts": true,
        },
    ],
};
