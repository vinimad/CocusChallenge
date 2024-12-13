import { test as baseTest } from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { productPage } from './produtPage'
import { homePage } from '../pages/homePage'

const test = baseTest.extend<{
  loginpage: loginPage
  productpage: productPage
  homepage: homePage
}>({
  loginpage: async ({ page, context }, use) => {
    await use(new loginPage(page, context))
  },
  homepage: async ({ page, context }, use) => {
    await use(new homePage(page, context))
  },
  productpage: async ({ page, context }, use) => {
    await use(new productPage(page, context))
  },
})

export default test