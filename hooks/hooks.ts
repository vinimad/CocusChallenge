import { test } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`)
})

test.afterEach('Status check', async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`)

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`)
})
