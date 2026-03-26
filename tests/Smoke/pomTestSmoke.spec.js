import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { HomePage } from '../../pages/HomePage.js';
import { CartPage } from '../../pages/CartPage.js';

test('POM test', async ({ page }) =>
{

    //Login

    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pupu@yopmail.com','Play@1235');

    await page.waitForTimeout(3000);

    //Home page

    const home=new HomePage(page);
    await home.addToCart('ZARA COAT 3');
    await home.goToCart();
    await page.waitForTimeout(3000);

    //Cart Page

    const cart=new CartPage(page);
    await cart.verifyproductInCart('ZARA COAT 3');

});