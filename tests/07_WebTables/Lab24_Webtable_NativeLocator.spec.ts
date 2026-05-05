import {test, expect} from '@playwright/test';

test.describe('Web Table Test with Playwright Native Locators', () => {
test('WebTable - Playwright Native Locator', async({page})=>{

 // Playwright Native Locators is very much recommended. 

    await page.goto('https://awesomeqa.com/webtable.html');

    const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
    const country1 = await row1.locator('td').nth(2).innerText();
    console.log(`Helen Bennett is In - ${country1}`);

    const row = page.locator('#customers tbody tr', {hasText: 'Mexico'});
    const company = await row.locator('td').nth(0).innerText();
    console.log(company + ' - Is in Mexico');


});

});