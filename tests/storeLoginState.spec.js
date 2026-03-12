
import{test,expect} from '@playwright/test'

let webContext;
test.beforeAll(async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    const email="pupu@yopmail.com"
    const pwd="Play@123"
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").type(email)
    await page.locator("#userPassword").type(pwd)
    await page.locator("#login").click()
    const signOutBtn=page.locator("//button[normalize-space(text())='Sign Out']")
    await signOutBtn.screenshot({path:'partialScreenshot.png'})
    if(await signOutBtn.isVisible())
    {
        console.log("Login successful");
    }
    await page.waitForLoadState('networkidle')
    await context.storageState({path : 'state.json'})
    webContext=await browser.newContext({storageState: 'state.json'})
}
)
test('place order',async()=>
{
    const page=await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client")

    await page.screenshot({path: 'screenshot.png'})
   /* const signOutBtn=page.locator("//button[normalize-space(text())='Sign Out']")

    if(await signOutBtn.isVisible())
    {
        console.log("Login successful");
    }*/
}
)