exports.CartPage=
class CartPage
{
     constructor(page)
     {
        this.page= page;
        this.noOfProducts='//div[@id="cart_contents_container"]//div/a/div';
     }
        async checkProductInCart(productName)
        {
            const productsInCart=await this.page.$$(this.noOfProducts);
            for(const product of productsInCart)
                {
                    console.log(await product.textContent())
                    if(productName === await product.textContent());
                    {
                        return true;
                        break;
                    }
                }
        }
     

}