const{test,expect}=require('@playwright/test')


test.use({viewport : {width:1280 , height: 720}})

test("verify flipkart homepage", async ({page})=>{

    const phoneNames=page.locator("//div[@class='KzDlHZ']")
    
    await page.goto("https://flipkart.com")

    await page.locator("//input[contains(@placeholder,'Search for Products')]").fill('phones')

    await page.locator("//button[@type='submit']").click()

   // console.log(await phoneNames.first().textContent())

    //console.log(await phoneNames.nth(1).textContent())

    //await page.waitForLoadState("networkidle")

    await phoneNames.first().waitFor()

    const allPhoneNames=await phoneNames.allTextContents() 

    console.log(allPhoneNames)


})