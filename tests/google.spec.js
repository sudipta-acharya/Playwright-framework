const{test,expect}=require('@playwright/test')

test("Verify Application name", async ({page})=> {

    await page.goto("https://google.com");

    const url=await page.url();

    console.log("Url title is :"+url);

    const title=await page.title();

    console.log("Title is "+ title);

   //await expect(page).toHaveTitle("Google");

   await expect(page).toHaveTitle("Yahoo");

})