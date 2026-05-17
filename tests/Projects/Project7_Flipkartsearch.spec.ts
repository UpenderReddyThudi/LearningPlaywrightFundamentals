import {test, expect} from '@playwright/test';

test('Flipkart - Search for macmini', async({page})=>{

    //Search for macmini in flipkart page
    await page.goto('https://www.flipkart.com/search');
    await page.getByPlaceholder('Search for products, brands and more').fill("Apple Mac Mini");
    await page.locator('svg').first().click();
    await page.waitForLoadState('networkidle');

    //click on Price Low to High
    await page.getByText('Price -- Low to High').click();
    await page.waitForLoadState('networkidle');

    //Get the Chepest Apple Mac Mini price
    const firstItemPrice = await page.locator('(//div[contains(@data-id,"CPU")]/div/a/div/div)[3]').first().textContent();
    console.log('Cheapest Apple Macmini: '+ firstItemPrice);
    await page.waitForTimeout(5000);

});