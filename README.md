# Salesforce Playwright Integration Example

## Project Description
A project to automate Salesforce Scratch Org set up using Playwright: https://playwright.dev/.

## How to use this example
---

1. Clone project and install required packages:
    + `$ git clone git@github.com:OliverAHolmes/salesforce-playwright.git`
    + `$ npm install`


2. Open `tests/example.spec.ts`

3. Update `sfdxProjectDir` to the directory of your SFDX project.

4. Make your Playwright automations, making sure you include:
    - await page.goto(sfOrgUrlFrontDoor);
    - await page.goto(sfOrgUrl + '/lightning/page/home');

    There is a example included that add nav items.
