exports.LoginPage =
class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.userNameInput='#user-name';
        this.passwordInput='#password'
        this.loginButton='#login-button'
    }  
        async gotoLoginPage()
        {
           await this.page.goto('https://www.saucedemo.com/');
        }
        async login(userName,password)
        {
            await this.page.locator(this.userNameInput).fill(userName);
            await this.page.type(this.passwordInput,password);
            await this.page.locator(this.loginButton).click();
            
        }

}