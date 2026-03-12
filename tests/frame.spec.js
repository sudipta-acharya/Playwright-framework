import { test,expect } from "@playwright/test";

test('frame handling', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const framePage=await page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck=await framePage.locator("//div[@class='text']/h2").textContent();
   console.log(textCheck.split(" ")[1]);
}
)
