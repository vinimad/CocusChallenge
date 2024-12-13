import { expect, type Locator, type Page } from '@playwright/test'
import { dataDefault, dataDevGeneral } from '../data/dataconfig'


export class homePage {
    readonly page: Page
    readonly myAccountBtn: Locator
    readonly acceptCookiesBtn: Locator
    readonly signinlink: Locator

    constructor(page: Page) {
        this.page = page
        this.myAccountBtn = page.getByLabel('Sign in')
        this.acceptCookiesBtn = page.locator('#onetrust-accept-btn-handler')
    }

    async accessHomePage() {
        await this.page.goto(dataDefault.dev)
        await this.acceptCookiesBtn.click()
        await expect(this.page).toHaveTitle(dataDevGeneral.project_title)
    }

    async accessLoginPage() {
        await this.myAccountBtn.click()
    }


}