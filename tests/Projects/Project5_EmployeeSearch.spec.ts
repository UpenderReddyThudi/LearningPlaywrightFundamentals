import {test, expect} from '@playwright/test';

test('Assignment5 - Employee Search', async({page})=>{

    
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    
    let employeename = 'kabir'
    await page.locator('#employee-search').fill(employeename);
    //await page.locator("//td[text()='Kabir.Khan']/preceding-sibling::td/input").click();
    await page.locator("tr:has(td:text('Kabir.Khan'))").locator("td").first().click();
    
    //await page.pause();
    
    let employee = await page.locator('#selected-output').innerText(); 
    console.log(employee);
    expect(employee).toContain('Kabir.Khan');

    await page.waitForTimeout(5000);

});