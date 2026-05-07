import{test, expect} from '@playwright/test';

test('Selectbox - Advanced', async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    //Single select
    await page.locator('#rs-single').click();
    await page.getByText('Cypress').click();
    
    //Multi select
    await page.locator('#rs-multi').click();
    await page.getByText('Pytest',{exact:true}).click();
    await page.getByText('Cucumber',{exact:true}).click();
    await page.getByRole('option', { name: 'Playwright' }).click();
    //await page.getByText('Playwright',{exact:true}).click(); // 2 entries so it wont work
    await page.keyboard.press("Escape");
    
    await page.waitForTimeout(5000);

});