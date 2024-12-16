import { expect, type Locator, type Page } from '@playwright/test'
import { dataProduct } from '../data/dataconfig'

export class productPage {
    readonly page: Page
    readonly searchBar: Locator
    readonly searchedProduct: Locator
    readonly productTitleSearch: Locator
    readonly productTitlePDP: Locator
    readonly productTitleMiniCart: Locator
    readonly productSizeBtn: Locator
    readonly addCartBtn: Locator
    readonly proceedCheckoutBtn: Locator
    readonly closePopUpBtn: Locator
    readonly orderSummary: Locator


    constructor(page: Page) {
        this.page = page
        this.searchBar = page.locator('#header-search-input')
        this.searchedProduct = page.locator('.b-product_tile-container')
        this.productTitleSearch = page.locator('.b-product_tile-link')
        this.productTitlePDP = page.locator('#editProductModalTitle')
        this.productTitleMiniCart = page.locator('.b-minicart_product-title')
        this.productSizeBtn = page.locator('#variation-swatch-button-1-18')
        this.addCartBtn = page.locator('.b-product_addtocard-availability')
        this.closePopUpBtn = page.getByRole('button', { name: 'Close' })
        this.proceedCheckoutBtn = page.locator('xpath=//a[contains(text(),"Checkout")]')
        this.orderSummary = page.locator('.b-summary_order-header')
    }


    /**
     * Validates that the searched product is visible and matches the expected name.
     * @param product - The expected product name in the search results.
     */
    async validateProductSearched(product: string) {
        await this.productTitleSearch.first().waitFor()
        await expect.soft(this.productTitleSearch.first()).toBeVisible()
        await expect.soft(this.productTitleSearch.first()).toHaveText(product)
    }

    /**
     * Searches for a product by filling the search bar and pressing Enter.
     * @param product - The product name to search for.
     */
    async searchProduct(product: string) {
        await this.searchBar.fill(product)
        await this.page.keyboard.press('Enter')
    }

    // Adds the first product from the search results to the cart.
    async addProductCart() {
        await this.productTitleSearch.first().waitFor()
        await this.productTitleSearch.first().click()
        await this.productTitlePDP.waitFor()
        await this.productSizeBtn.first().click()
        await this.closePopUpBtn.click()
        await this.addCartBtn.first().click()
    }

    /**
     * Validates that the product was added to the cart and matches the expected name.
     * @param product - The expected product name in the mini cart.
     */
    async validateProductAddedCart(product: string) {
        await this.productTitleMiniCart.first().waitFor()
        await expect.soft(this.productTitleMiniCart.first()).toBeVisible()
        await expect.soft(this.productTitleMiniCart.first()).toHaveText(product)
    }

    // Proceeds to the checkout from the mini cart.
    async checkoutMiniCart() {
        await this.proceedCheckoutBtn.click()
    }

    /**
     * Validates that the user is logged in and the checkout page has loaded correctly.
     */
    async validateCheckoutLoggedIn() {
        await this.orderSummary.first().waitFor()
        await expect(this.page).toHaveTitle(dataProduct.shipping_title)
        await expect.soft(this.orderSummary.first()).toBeVisible()
        await expect.soft(this.orderSummary.first()).toHaveText(dataProduct.order_summary)
    }

}
