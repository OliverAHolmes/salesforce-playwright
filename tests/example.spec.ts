import { test, expect } from '@playwright/test';
import getOrgAuthUrl from './get-org-url';

const sfOrgUrl = getOrgAuthUrl('../projects/lumary-core/');


test('add nav items', async ({ page }) => {
  
  test.slow();

  await page.goto(sfOrgUrl);
  await page.goto(sfOrgUrl.split('/secur/')[0] + '/lightning/page/home');
  await page.locator('button:has-text("Edit nav items")').click();
  await page.locator('text=Add More Items').click();
  await page.locator('[aria-label="Available\\ Items"] >> text=All').click({delay: 1000});
  await page.locator('text=Sessions CalendarSessions Calendar >> span').nth(2).click();
  await page.locator('text=SessionsSessions >> span').nth(2).click();
  await page.locator('text=AuthorizationsAuthorizations >> span').nth(2).click();
  await page.locator('text=Authorization ItemsAuthorization Items >> span').nth(2).click();
  await page.locator('button:has-text("Add 4 Nav Items")').click();
  await page.locator('button:has-text("Save")').click();
  
});
