import{test,expect} from '@playwright/test';
import { LoginPage } from '../SauceDemoAutomationUsingPlaywright/LoginPage';
import { HomePage } from '../SauceDemoAutomationUsingPlaywright/HomePage';
import { CartPage } from '../SauceDemoAutomationUsingPlaywright/CartPage';
test('test',async ({page}) =>
    {
       //login
         const login=new LoginPage(page);
         await login.gotoLoginPage();
         await login.login('standard_user','secret_sauce');
         await page.waitForTimeout(3000);
       //home
       const Home = new HomePage(page);
       await Home.addProductTocart("Sauce Labs Fleece Jacket");
       await page.waitForTimeout(3000);
       await Home.gotoCart();

       //cart
       const cart =new CartPage(page);
       await page.waitForTimeout(3000);
       const status=await cart.checkProductInCart("Sauce Labs Fleece Jacket");
       expect(await status).toBe(true);
    }
);