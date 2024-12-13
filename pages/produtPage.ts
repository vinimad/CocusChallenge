import { expect, type Locator, type Page } from '@playwright/test'
import { dataProduct } from '../data/dataconfig'

export class productPage {
    readonly page: Page
    readonly searchBar: Locator
    readonly searchedProduct: Locator
    readonly productTitleSearch: Locator
    readonly productTitlePDP: Locator


    constructor(page: Page) {
        this.page = page
        this.searchBar = page.locator('#header-search-input')
        this.searchedProduct = page.locator('.b-product_tile-container')
        this.productTitleSearch = page.locator('.b-product_tile-link')
        this.productTitlePDP = page.locator('#editProductModalTitle')


    }

    async validateProductSearched(product: string) {
        await this.productTitleSearch.first().waitFor()
        await expect.soft(this.productTitleSearch.first()).toBeVisible()
        await expect.soft(this.productTitleSearch.first()).toHaveText(product)
    }

    async searchProduct(product: string) {
        await this.searchBar.fill(product)
        await this.page.keyboard.press('Enter')
    }


}
