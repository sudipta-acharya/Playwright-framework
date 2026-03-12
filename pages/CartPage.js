exports.CartPage=

class cartPage
{
    constructor(page)
    {
        this.page=page;
        this.productNameInCart="//h3[normalize-space()='ZARA COAT 3']";

    }

    async verifyproductInCart(productName)
    {
       if(await this.page.locator(this.productNameInCart)===productName)
       {
        console.log("Product is added to cart");
       }
    }
}