const{test,expect}=require('@playwright/test')

test.use({viewport:{width :1038,height: 569}})

test('verify login page', async({page})=>{

    const dropdown=page.locator("//select[@class='form-control']")

    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    
    await dropdown.selectOption("Teacher")

    await page.locator("//span[normalize-space()='User']").click()

    await page.locator("//button[@id='okayBtn']").click()

    await expect(page.locator("//span[normalize-space()='User']")).toBeChecked()

    console.log(await page.locator("//span[normalize-space()='User']").isChecked())

    await page.locator("//input[@id='terms']").click()

    await expect(page.locator("//input[@id='terms']")).toBeChecked()

    await page.locator("//input[@id='terms']").uncheck()

    expect(await page.locator("//input[@id='terms']").isChecked()).toBeFalsy()

    await expect(docLink).toHaveAttribute("class","blinkingText")

  //  await docLink.click()


   // await page.pause()
});

test('verify child window', async({browser})=>{

    const username="//input[@id='username']"

    const context= await browser.newContext()

    const page=await context.newPage()

    const docLink=page.locator("//a[contains(text(),'Free')]")

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    const [newPage]=await Promise.all(
    [
        context.waitForEvent('page') ,//listen for any new page pending, rejected or fulfilled
        docLink.click(),

    ]) 

    const text=await newPage.locator(".red").textContent()
    const words=text.split("@")
    const emailArr=words[0].split(" ")
    const email=emailArr[emailArr.length-1]
    //console.log(email)
    const domain=words[1].split(" ")[0]
   // console.log(domain)

    const fullEmailId=email+"@"+domain
   console.log(fullEmailId)
   await page.locator("//input[@id='username']").type(fullEmailId)

   console.log(await page.locator("//input[@id='username']").inputValue())
   // console.log(text)


})
