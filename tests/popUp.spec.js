import{test,expect} from "@playwright/test";

test('popup validation',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   /* await page.goto("https://google.com");
    await page.goBack();
    await page.goForward();*/

     expect(await page.locator("#displayed-text")).toBeVisible();
     await page.locator("#hide-textbox").click();
     expect(await page.locator("#displayed-text")).toBeHidden();
     await page.locator("#alertbtn").click();
     page.on('dialog',dialog =>dialog.accept());
     await page.locator("#alertbtn").click();
     await page.pause();
     page.on('dialog',dialog =>dialog.dismiss());

     await page.locator("#mousehover").hover();
}

)