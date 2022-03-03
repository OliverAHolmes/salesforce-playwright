import { test, expect } from '@playwright/test';
import getOrgAuthUrl from './get-org-url';

const sfOrgUrl = getOrgAuthUrl('../projects/lumary-core/');


test('basic test', async ({ page }) => {
  await page.goto(sfOrgUrl);

  await page.goto(sfOrgUrl.split('/secur/')[0] + '/lightning/page/home');

  await page.locator('button:has-text("Edit nav items")').click();
  sleep(100);

  await page.locator('text=Add More Items').click();
  sleep(100);

  await page.locator('[aria-label="Available\\ Items"] >> text=All').click();
  sleep(100);

  await page.locator('text=Sessions CalendarSessions Calendar >> span').nth(2).click();
  sleep(1000);

  await page.locator('text=SessionsSessions >> span').nth(2).click();
  sleep(1000);

  await page.locator('text=AuthorizationsAuthorizations >> span').nth(2).click();
  sleep(1000);

  await page.locator('text=Authorization ItemsAuthorization Items >> span').nth(2).click();
  sleep(1000);

  await page.locator('button:has-text("Add 4 Nav Items")').click();
  sleep(1000);

  await page.locator('button:has-text("Save")').click();
  sleep(2000);

});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}