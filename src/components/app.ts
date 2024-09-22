import { autoInjectable } from "tsyringe";
import LaunchedApp from "./common/launched.app.ts";
import SignIn from "./common/sign.in.ts";
import Payments from "./payments/payments.ts";

@autoInjectable()
export default class App {
    launchedApp?: LaunchedApp;
    signIn?: SignIn;
    payments?: Payments;

    constructor(
        launchedApp?: LaunchedApp,
        signIn?: SignIn,
        payments?: Payments
    ) {
        this.launchedApp = launchedApp;
        this.signIn = signIn;
        this.payments = payments;
    }
}
