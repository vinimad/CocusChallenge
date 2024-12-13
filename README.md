# Test Automation Project COCUS  
<img src="assets/logo.png" alt= "ght" width= "500">  

## Index  
1. <a href="#prerequisites-">Prerequisites</a>  
2. <a href="#installation-">Installation</a>  
   - <a href="#1-clone-the-repository">Clone the Repository</a>  
   - <a href="#2-install-dependencies">Install Dependencies</a>  
   - <a href="#3-install-playwright-browsers">Install Playwright Browsers</a>  
3. <a href="#project-structure-">Project Structure</a>  
4. <a href="#configuration-️">Configuration</a>  
   - <a href="#configure-playwright">Configure Playwright</a>  
5. <a href="#running-tests-️">Running Tests</a>  
   - <a href="#1-run-all-tests">Run All Tests</a>  
   - <a href="#2-run-a-specific-test">Run a Specific Test</a>  
   - <a href="#3-run-tests-in-headed-mode">Run Tests in Headed Mode</a>  
   - <a href="#4-generate-reports">Generate Reports</a>  
6. <a href="#support">Support</a>  

---

## Introduction  
#### Welcome to the Playwright Test Automation Project repository. This document provides detailed instructions on how to set up and run the project.  

---

## Prerequisites 📝  
Before starting, make sure you have the following requirements installed on your machine:  

- Install Visual Studio Code on your desktop by clicking the link: <a href="https://code.visualstudio.com/download">VS Code</a>  

- Install Git by clicking the link: <a href="https://git-scm.com/download/win">Git</a>  

- To install pnpm, follow the instructions at: <a href="https://pnpm.io/installation">PNPM</a>  

---

## Installation 🖥  
Follow the steps below to set up the project on your local machine:  

### 1. Clone the Repository:  
First, clone the repository to your local machine using the Git command:  

- ```git clone https://github.com/vinimad/CocusChallenge.git ```


### 2. Install Dependencies:
After cloning the repository, install the necessary dependencies using:  
- ```pnpm install```

### 3. Install Playwright Browsers:
Playwright requires specific browsers to run the tests. Install them using the command below:
    
 - ```pnpm playwright install```

## Project Structure 🎯  
The project structure follows a standard organization for Playwright testing:  

- **tests:** Contains all test files.  

- **page-objects:** Contains the page object files (Page Objects).  

- **config:** Configuration files for different environments and parameters.  

- **report:** Directory where test reports are generated.  

## Configuration ⚙️  
### **Configure Playwright:**  

In the `playwright.config.js` file, you can configure various options, such as browser settings, timeouts, and report directories. Example:  

```javascript
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
      },
    },
  ],
});
```

## Running Tests ⚖️

### 1. Run All Tests
To run all tests, use the command:
```pnpm exec playwright test```

### 2. Run a Specific Test
To run a specific test, use the command:
```pnpm exec playwright test loginpage.spec.ts --ui```

### 3. Run Tests in Headed Mode
To visualize the tests running, you can execute them in headed mode:
```pnpm exec playwright test ticketpage.spec.ts  --headed --project chromium```

### 4. Generate Reports
To generate test reports, you can configure Playwright to use a reporter:
```pnpm exec playwright show-report```

## Support 📱
If you have any questions or suggestions, feel free to open an issue or contact us directly.

    