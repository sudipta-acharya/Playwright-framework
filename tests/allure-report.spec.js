import { test, expect, request } from "@playwright/test";

test.use({viewport:{width :1200,height: 700}})

test('login to application',async({page})=>{

    const email="pupu@yopmail.com"
    const pwd="Play@123"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill(email)
    await page.getByPlaceholder("enter your passsword").fill(pwd)
    await page.getByRole("button",{name:"Login"}).click()
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const signOutBtn=page.locator("//button[normalize-space(text())='Sign Out']")

    if(await signOutBtn.isVisible())
    {
        console.log("Login successful");
    }
    const productName="ADIDAS ORIGINAL";

    await page.locator(".card-body").filter({hasText:productName}).
    getByRole("button",{name:"Add To Cart"}).click();
})

test('navigate to cart & checkout',async({page})=>{
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
        
       await expect(page.getByText("My Cart")).toBeVisible();

       await page.locator("div li").first().waitFor();

       //verfiy the product is added to cart
        await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
        console.log("Product is added to cart - Test Passed");
       

      //click on checkout button
       await page.getByRole("button",{name:"Checkoout"}).click();

       //verify product at checkout page
       await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
});