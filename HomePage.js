exports.HomePage =
class HomePage
{
    constructor(page)
    {
        this.page=page;
        this.productList='//*[@class="inventory_list"]//a/div';
        this.addToCartBtn='#add-to-cart';
        this.cart='#shopping_cart_container';
    }
        async addProductTocart(productname)
        {
            const productList = await this.page.$$(this.productList);
            for(const product of productList)
                {
                    if(productname === await product.textContent())
                        {
                            await product.click();
                            break;
                        }
                }
                await this.page.locator(this.addToCartBtn).click();

        }
     async gotoCart()
    {
        await this.page.locator(this.cart).click();

    }
        

}