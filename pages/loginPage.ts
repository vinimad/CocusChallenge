import { expect, type Locator, type Page } from '@playwright/test'
import { dataDevGeneral, dataLogin } from '../data/dataconfig'


export class loginPage {
    readonly page: Page
    readonly inputEmail: Locator
    readonly inputPassword: Locator
    readonly logInBtn: Locator
    readonly userLogged: Locator
    readonly logOutBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.inputEmail = page.locator('#dwfrm_login_email')
        this.inputPassword = page.locator('#dwfrm_login_password')
        this.logInBtn = page.getByRole('button', { name: 'LOG IN' })
        this.userLogged = page.locator('.b-user_greeting-message')
        this.logOutBtn = page.locator('.b-account-signout')
    }

    // Logs in the user by filling out the login form and submitting it
    async doLogin() {
        await this.inputEmail.waitFor()
        await this.inputEmail.fill(dataDevGeneral.username)
        await this.inputPassword.fill(dataDevGeneral.password)
        await this.logInBtn.click()
    }

    // Verifies that the user has logged in by checking the logged-in message
    async validateLogin() {
        await this.userLogged.waitFor()
        await expect(this.userLogged).toHaveText(dataLogin.userLoggedMsg)
    }

    // Logs out the user by clicking the logout button
    async doLogout() {
        await this.logOutBtn.waitFor()
        await this.logOutBtn.click()
    }

    // Verifies that the user has logged out by checking the login page title and the empty email field
    async validateLogout() {
        await this.inputEmail.waitFor()
        await expect(this.page).toHaveTitle(dataLogin.login_title)
        await expect(this.inputEmail).toBeEmpty()
        await expect(this.inputEmail).toBeVisible()
    }

}



