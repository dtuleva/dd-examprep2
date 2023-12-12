const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://dd-library-examprep2.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  