export class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.userEmail='#userEmail';
        this.userPassword='#userPassword';
        this.loginBtn='#login';

    }

    async gotoLoginPage()
    {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async login(username,password)
    {
        await this.page.locator(this.userEmail).fill(username);
        await this.page.locator(this.userPassword).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}