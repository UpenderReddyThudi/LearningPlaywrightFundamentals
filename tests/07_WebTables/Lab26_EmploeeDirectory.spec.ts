import{test, expect} from '@playwright/test';

test('WebTable - Employee Directory', async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    //Xpath
    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

    //Playwright Native Locator
    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

    await page.waitForTimeout(5000);


});