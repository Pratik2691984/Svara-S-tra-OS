import { test, expect } from '@playwright/test';

test('Should accurately detect "Raudri" at microtonal interval', async ({ page }) => {
  await page.goto('/');
  
  // Inject 463.5 Hz (approx Komal Re for 440Hz Sa)
  const shruti = await page.evaluate(() => {
    // @ts-ignore
    return window.sutraCore.getShruti(463.5);
  });

  expect(shruti).toBe('Raudri');
});
