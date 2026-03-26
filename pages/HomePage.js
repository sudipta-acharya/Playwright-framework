export class HomePage {

    constructor(page) {
        this.page = page;
        this.products = ".card-body";
        this.topLink = "listitem";
        
    }

    async addToCart(productName)
    {
        await this.page.locator(this.products).filter({hasText:productName}).getByRole("button",{name:"Add To Cart"}).click();

    }

    async goToCart()
    {
        await this.page.getByRole(this.topLink).getByRole("button",{name:"Cart"}).click();
    }

}