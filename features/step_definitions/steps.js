const { Given,When, Then } = require('@cucumber/cucumber')
const{test,expect,playwright}=require('@playwright/test')

Given('a login to Ecommerce application using {username} and {password}', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions

           const browser=await playwright.chromium.launch()
           const context=await browser.newContext()
           const page=await context.newPage()

           return 'pending';
         });

 When('Add {string} to cart', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

    Then('Verify {string} is displayed in cart', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

 When('Enter valid details and place the order', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 Then('Verify order is present in orderHistory page', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

