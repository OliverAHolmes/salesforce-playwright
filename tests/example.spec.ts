import { test, expect } from '@playwright/test';
import getOrgAuthUrls from './sfdx-interface';

const sfdxProjectDir = '../projects/lumary-core/';

const sfOrgUrls = getOrgAuthUrls(sfdxProjectDir);
const sfOrgUrl = sfOrgUrls[0];
const sfOrgUrlFrontDoor = sfOrgUrls[1];


test('add nav items', async ({ page }) => {
  
  test.slow();

  await page.goto(sfOrgUrlFrontDoor);
  await page.goto(sfOrgUrl + '/lightning/page/home');
  await page.locator('button:has-text("Edit nav items")').click();
  await page.locator('text=Add More Items').click();
  await page.locator('[aria-label="Available\\ Items"] >> text=All').click({delay: 1000});
  await page.locator('text=Test1Test1 >> span').nth(2).click();
  await page.locator('text=Test2Test2 >> span').nth(2).click();
  await page.locator('button:has-text("Add 2 Nav Items")').click();
  await page.locator('button:has-text("Save")').click();

});
