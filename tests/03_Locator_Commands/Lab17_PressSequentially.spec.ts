import {test, expect} from '@playwright/test';

test('Press Texbox value Sequentially', async({page})=>{

    await page.goto('https://app.vwo.com/#/login');

    await page.getByRole('textbox', {name: 'Email address'}).pressSequentially('Admin123', {delay:200});

    await page.waitForTimeout(5000);

    await page.goto("https://google.com");
   
    await page.goBack();

    await page.goForward();

});