import{test,expect} from "@playwright/test";

test('handle iframe on main page',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framesPage=page.frameLocator("#courses-iframe");
    framesPage.locator("//div[@class='hidden md:flex items-center space-x-4 lg:space-x-6 text-sm']/a[text()='All-Access']").click();
})