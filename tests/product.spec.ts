import test from '../pages/basePage'
import { dataProduct } from '../data/dataconfig'

test('Scenario: Search for a specific product', async ({ homepage, productpage }) => {
    const product = dataProduct.specificProdut
    await test.step('Given the user accesses the homepage', async () => {
        await homepage.accessHomePage()
    })
    await test.step('When they search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('Then it validates that the searched item is returned', async () => {
        await productpage.validateProductSearched(product)
    })
})

test('Scenario: Checkout with user logged in', async ({ loginpage, homepage, productpage }) => {
    const product = dataProduct.specificProdut
    await test.step('Given the user accesses the homepage', async () => {
        await homepage.accessHomePage()
    })
    await test.step('When they search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('Then it validates that the searched item is returned', async () => {
        await productpage.validateProductSearched(product)
    })
})

test('Scenario: Checkout with user logged out', async ({ loginpage, homepage, productpage }) => {
    const product = dataProduct.specificProdut
    await test.step('Given the user accesses the homepage', async () => {
        await homepage.accessHomePage()
    })
    await test.step('When they search for a specific item', async () => {
        await productpage.searchProduct(product)
    })
    await test.step('Then it validates that the searched item is returned', async () => {
        await productpage.validateProductSearched(product)
    })
})

