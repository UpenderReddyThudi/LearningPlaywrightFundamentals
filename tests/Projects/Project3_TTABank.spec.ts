import {test, expect} from '@playwright/test';

test('TTA Bank - Money Transfer', async({page})=>{

    //Navigate to the TTA Bank URL
    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    
    //Click on Signup button
    await page.getByRole('button', {name: 'Sign Up'}).click();

    //await page.pause(); //To Find elements using getByRole

    //Fill the Sign Up Form and Clieck on Craete Account button
    await page.getByPlaceholder('John Doe').fill('upenderreddyt');
    await page.getByPlaceholder('you@example.com').fill('upender@example.com');
    await page.locator("input[type='password']").fill('TTABankLogin');
    await page.getByRole('button', {name:'Create Account'}).click();

    //await page.pause(); //To Find elements using getByRole
    //Verify Initial Balance - $50,000.00
    expect(page.getByRole('heading', { name: '$50,000.00' })).toBeVisible();

    //Navigate to Transfer Funds
    await page.getByRole('button', { name: 'Transfer Funds' }).click();

    // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234576890
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('Playwright Course Payment');
    await page.getByRole('button',{name:'Continue'}).click();

    //Click on Confirm Transfer
    await page.getByRole('button', {name:'Confirm Transfer'}).click();

    //Navigate to Dashboard and verify the Balance amount 
    await page.getByRole('button', { name: 'Dashboard' }).click();
    expect(page.getByRole('heading', { name: '$45,000.00' })).toBeVisible();

    //Logout from the TTA Bank
    await page.getByRole('button', {name: 'Sign Out'}).click();

});
