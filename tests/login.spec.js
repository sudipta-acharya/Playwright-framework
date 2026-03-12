const{test,expect}= require ('@playwright/test')

test.use({viewport:{width :1038,height: 569}})

test("Login to application", async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("input[name='password']").type("admin1234")
    await page.locator("//button[@type='submit']").click()
  
    
 //Verify the invalid credential error message in login page
    const el=await page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")
    const errorMsg=await el.textContent()

    await expect(el).toHaveText("Invalid credentials")

    console.log("Error message is : "+errorMsg);

    await expect(errorMsg.includes("Invalid")).toBeTruthy()

    await expect(errorMsg==="Invalid credentials").toBeTruthy()
    
    /*await expect(page).toHaveURL(/dashboard/)
//logout
   // await page.getByAltText("profile picture").click()
   await page.locator("//img[@class='oxd-userdropdown-img']").click()
    await page.getByText("Logout").click()

    const element= await page.locator("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']")
    await expect(element).toHaveText("Login")*/

      }
)
