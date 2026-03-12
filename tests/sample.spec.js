const {test,expect} = require('@playwright/test')

test("First test", async function({page})
{
    console.log("first test");
})

test("Second test", async function({page})
{
    console.log("second test");

})

test("Third test", async function({page})
{
    console.log("third test");
})