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

    //Go to Cart
    await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
        
       await expect(page.getByText("My Cart")).toBeVisible();

       await page.locator("div li").first().waitFor();

       //verfiy the product is added to cart
        await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
        console.log("Product is added to cart - Test Passed");
       

      //click on checkout button
       await page.getByRole("button",{name:"Checkout"}).click();

       //verify product at checkout page
       await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    
       console.log("Product verified at checkout page - Test Passed");

       //Enter Credit Card details
       await page.locator("//input[@value='4542 9931 9292 2293']").clear();
       await page.locator("//input[@value='4542 9931 9292 2293']").fill("4111 1111 1111 1111");
        
       await page.locator("//select[@class='input ddl'][1]").selectOption("07");
       await page.locator("//select[@class='input ddl'][2]").selectOption("28");
      // await page.selectOption("28");
       await page.locator("//div[text()='CVV Code ']/following-sibling::input").fill("123");
       await page.locator("//div[contains(text(),'Name on Card')]/following-sibling::input").fill("Pupu's card") 

       //Enter Shippig Information
       await page.getByPlaceholder("Select Country").pressSequentially("ind");
       await page.getByRole("button",{name:"India"}).nth(1).click();
       

       expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);

       //Place the order
         await page.getByText("PLACE ORDER").click();

    //verify order confirmation
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
    await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    console.log("Order Placed Successfully - Test Passed");

    const orderIdwithPipeLine=await page.locator("tr[class='ng-star-inserted'] td[class='em-spacer-1']").textContent();
    const orderId=orderIdwithPipeLine.replaceAll("|","").trim();
    console.log("Order ID is :"+orderId);

    //verify order in order history page
    await page.locator("//label[@routerlink='/dashboard/myorders']").click();
    await page.locator("//h1[@class='ng-star-inserted']").waitFor();

    const orderIdRows=await page.locator("//tr[@class='ng-star-inserted']/th").allTextContents();
    const productNameInOrderHistoryPage=await page.locator("//tr[@class='ng-star-inserted']/td[2]").allTextContents();
    for(let i=0;i<orderIdRows.length;i++)
    {
        if(orderIdRows[i]===orderId & productNameInOrderHistoryPage[i]===productName)
        {
            console.log("Order is present in Order History - Test Passed");
            await page.locator("//button[@class='btn btn-primary']").nth(i).click();
            break;
        }
    }
//verify order details in order summary page
    const orderIdInSummaryPage=await page.locator("//div[@class='col-text -main']").textContent();
    expect(orderIdInSummaryPage).toContain(orderId);
    console.log("Order ID verified in Order Summary Page - Test Passed");
    await page.locator("//div[@class='btn -teal']").click();

    }


)