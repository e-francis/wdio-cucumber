import { config as sharedConfig } from "./wdio.shared.conf.ts";

export const config: WebdriverIO.Config = {
    ...sharedConfig,

    specs: ["../src/features/signIn/signIn.feature"],

    capabilities: [
        {
            // capabilities for local Appium web tests on an Android Emulator
            platformName: "Android",
            "wdio:maxInstances": 1,
            "appium:deviceName": "Pixel-8-Pro",
            "appium:platformVersion": "14.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:appPackage": "com.lenddo.mobile.paylater.staging",
            "appium:appActivity": "com.lenddo.mobile.paylater.SplashActivity",
            "appium:appWaitActivity":
                "com.lenddo.mobile.paylater.staging, com.lenddo.mobile.paylater.SplashActivity",
            "appium:avd": "Pixel-8-Pro",
        },
    ],
};
