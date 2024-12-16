import test from '../pages/basePage'
import { dataProduct } from '../data/dataconfig'

// This test validates that a specific product can be searched and found on the homepage.
test('Scenario: Search for a specific product', async ({ homepage, productpage }) => {
    const product = dataProduct.specificProdut
    await test.step('Given the user accesses the homepage', async () => {
        await homepage.accessHomePage()
    })
    await test.step('When user search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('Then it validates that the searched item is returned', async () => {
        await productpage.validateProductSearched(product)
    })
})

// This test verifies that a logged-in user can search for a product, add it to the cart, and proceed to the checkout.
test('Scenario: Checkout with user logged in', async ({ loginpage, homepage, productpage }) => {
    const product = dataProduct.specificProdut
    const productCart = dataProduct.specificProdutCart
    await test.step('Given the user accesses the homepage logged in', async () => {
        await homepage.accessHomePage()
        await homepage.accessLoginPage()
        await loginpage.doLogin()
        await loginpage.validateLogin()
    })
    await test.step('When user search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('And adds the product to the cart', async () => {
        await productpage.addProductCart()
        await productpage.validateProductAddedCart(productCart)
    })
    await test.step('And go to checkout', async () => {
        await productpage.checkoutMiniCart()
    })
    await test.step('Then validate that the user is on the shipping page', async () => {
        await productpage.validateCheckoutLoggedIn()
    })
})

// This test ensures that a user logged out is redirected to the login page when attempting to proceed to checkout.
test('Scenario: Checkout with user logged out', async ({ loginpage, homepage, productpage }) => {
    const product = dataProduct.specificProdut
    const productCart = dataProduct.specificProdutCart
    await test.step('Given the user accesses the homepage', async () => {
        await homepage.accessHomePage()
    })
    await test.step('When user search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('And adds the product to the cart', async () => {
        await productpage.addProductCart()
        await productpage.validateProductAddedCart(productCart)
    })
    await test.step('And go to checkout', async () => {
        await productpage.checkoutMiniCart()
    })
    await test.step('Then validate that the user is on the login page', async () => {
        await loginpage.validateUserLogout()
    })
})
