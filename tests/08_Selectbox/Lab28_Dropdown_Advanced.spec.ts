import{test, expect} from '@playwright/test';

test('Dropdown selection - Advanced', async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    await page.locator('//div[@data-testid="dropdown-language"]').click();
    await page.getByText('JavaScript').click();
    await page.keyboard.press("Escape");

    await page.locator('#experience-shell').click();
    await page.getByText('Senior (7+ years)').click();
    await page.keyboard.press("Escape");

    await page.waitForTimeout(5000);

});