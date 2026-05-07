import{test, expect} from '@playwright/test';

test('Dropdown selection  - Basic', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator("#dropdown").selectOption('Option 2');
    await page.waitForTimeout(5000);
});