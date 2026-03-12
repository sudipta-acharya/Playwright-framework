import { test, expect, request } from "@playwright/test";

const {APIUtils}=require('./utils/APIUtils');

test.use({viewport:{width :1038,height: 569}})

//API Login
const loginPayload={userEmail: "pupu@yopmail.com", userPassword: "Play@123"} //storing login data
const orderPayLoad={orders:[{country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68"}]}

let response;
test.beforeAll(async()=>
{
 const apiContext=await request.newContext();
 const apiUtils=new APIUtils(apiContext,loginPayload);
 response=await apiUtils.createOrder(orderPayLoad);

 console.log("Order id is : "+response.orderId);

 
/* const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data : loginPayload}) //passing url & login) data
 expect(loginResponse.ok()).toBeTruthy();
const loginResponsejson=await loginResponse.json();
token=loginResponsejson.token;
console.log(token);

const orderResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data: orderPayLoad,
        headers:{
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
const orderResponseJson=await orderResponse.json();
orderId=orderResponseJson.orders[0];*/

});




test('login to application & place order ',async({page})=>{


    await page.addInitScript((value) => 
    {
        window.localStorage.setItem("token",value) ; //taking the argument and doing set up here
    }, response.token
);
const productName="ZARA COAT 3";
    
    await page.goto("https://rahulshettyacademy.com/client/");

    //page.pause();
   /* const email="pupu@yopmail.com"
    const pwd="Play@123"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill(email)
    await page.locator("#userPassword").fill(pwd)
    await page.locator("#login").click()
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const signOutBtn=page.locator("//button[normalize-space(text())='Sign Out']")

    if(await signOutBtn.isVisible())
    {
        console.log("Login successful");
    }
    const productName="ADIDAS ORIGINAL";
    const listOfProducts=await page.locator(".card-body");
    const nameOfItems= page.locator("//div[@class='card-body']/descendant::b").allTextContents();
    console.log(nameOfItems);
    const count=await listOfProducts.count();

    for(let i=0;i<count;i++)
    {

       if(await listOfProducts.nth(i).locator("b").textContent() === productName)
       {

        //Add to cart
        await listOfProducts.nth(i).locator("text= Add To Cart").click();
       
       break;
       }
    }
     await page.locator("//button[@routerlink='/dashboard/cart']").click();
        
       const myCartText=page.locator("//h1[text()='My Cart']")

       expect(await myCartText.isVisible());

       await page.locator("div li").first().waitFor();

       //verfiy the product is added to cart

      const flag= await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
        expect(flag).toBeTruthy();
       const cartItem=await page.locator(".cartSection h3").textContent();
       if(cartItem===productName)
       {
        console.log("Product is added to cart - Test Passed");
       }

      //click on checkout button
       await page.locator("text=Checkout").click();

       //verify product at checkout page
       const itemIChecout=await page.locator(".item__title").textContent();
       expect(itemIChecout).toContain(productName);
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
       await page.locator("//input[@placeholder='Select Country']").pressSequentially("ind");
       const dropdown=page.locator('.ta-results')
       await dropdown.waitFor();
       const optionCount= await dropdown.locator("button").count();

       for(let i=0;i<optionCount;i++)
       {
        const text=await dropdown.locator("button").nth(i).textContent();
        if(text===" India")
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }

       }

       expect(await page.locator(".user__name [type='text']").first()).toHaveText(email);

       //Place the order
         await page.locator("//a[text()='Place Order ']").click();

    //verify order confirmation
    const thankYouMsg=await page.locator(".hero-primary").textContent();
    expect(thankYouMsg).toContain("Thankyou for the order.");

    expect(await page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
    const productNameinOrderCnfPage=await page.locator("//td[@class='line-item product-info-column m-3']/div[1]").textContent();
    expect(productNameinOrderCnfPage).toContain(productName);
    console.log("Order Placed Successfully - Test Passed");

    const orderIdwithPipeLine=await page.locator("tr[class='ng-star-inserted'] td[class='em-spacer-1']").textContent();
    const orderId=orderIdwithPipeLine.replaceAll("|","").trim();
    console.log("Order ID is :"+orderId);*/

    //verify order in order history page
    await page.locator("//button[@routerlink='/dashboard/myorders']").click();
    await page.locator("//h1[@class='ng-star-inserted']").waitFor();

    const orderIdRows=await page.locator("//tr[@class='ng-star-inserted']/th").allTextContents();
    const productNameInOrderHistoryPage=await page.locator("//tr[@class='ng-star-inserted']/td[2]").allTextContents();
    for(let i=0;i<orderIdRows.length;i++)
    {
        if(orderIdRows[i]===response.orderId & productNameInOrderHistoryPage[i]===productName)
        {
            console.log("Order " +response.orderId +" is present in Order History - Test Passed");
            await page.locator("//button[@class='btn btn-primary']").nth(i).click();
            break;
        }
    }
//verify order details in order summary page
    const orderIdInSummaryPage=await page.locator("//div[@class='col-text -main']").textContent();
    expect(orderIdInSummaryPage).toContain(response.orderId);
    console.log("Order ID verified in Order Summary Page - Test Passed");
    await page.locator("//div[@class='btn -teal']").click();

    }


)