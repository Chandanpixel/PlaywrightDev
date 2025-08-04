    import { Page,Locator} from "@playwright/test";

    export class LoginPage {
        readonly page: Page;
        readonly userNameInput: Locator;
        readonly passwordInput: Locator;
        readonly loginButton: Locator;

        constructor(page: Page) {
            this.page = page;
            
            this.userNameInput = page.locator("//input[@name='user-name']");
            this.passwordInput = page.locator("//input[@name='password']");
            this.loginButton = page.locator("//input[@name='login-button']");
        }

        async openApplication(){
            await this.page.goto("https://www.saucedemo.com/");
        }
        async login(username: string, password: string): Promise<void> {
            await this.openApplication();
            await this.userNameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
        }
    }
 

    //updated to use Playwright's Locator API for better element handling
    //This class encapsulates the login functionality for the SauceDemo application 
