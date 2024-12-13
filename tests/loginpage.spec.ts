import test from '../pages/basePage'

// This test verifies that a user can successfully log in to the Boohoo E-commerce platform. 
// It ensures the user is able to access the login screen, perform the login action, and validate that the login was successful.
test('Scenario: Successfully Logging into Boohoo E-commerce', async ({ loginpage, homepage }) => {
  await test.step('Given access to the login screen', async () => {
    await homepage.accessHomePage()
    await homepage.accessLoginPage()
  })
  await test.step('When the user logs in', async () => {
    await loginpage.doLogin()
  })
  await test.step('Then it is validated that the user is logged in successfully', async () => {
    await loginpage.validateLogin()
  })
})

// This test verifies that a user can successfully log out of the Boohoo E-commerce platform. 
// It first ensures the user is logged in, then performs the logout action, and validates that the logout was successful.
test('Scenario: Successfully Logout into Boohoo E-commerce', async ({ loginpage, homepage }, ) => {
  await test.step('Given the user is logged in', async () => {
    await homepage.accessHomePage()
    await homepage.accessLoginPage()
    await loginpage.doLogin()
    await loginpage.validateLogin()
  })
  await test.step('When the user logs out', async () => {
    await loginpage.doLogout()
  })
  await test.step('Then it is validated that the user is logged out successfully', async () => {
    await loginpage.validateLogout()
  })
})