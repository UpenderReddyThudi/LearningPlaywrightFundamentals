import {test, expect} from '@playwright/test';

test('Two Users Interact', async({browser}) => {
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();

    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();

    await adminPage.goto('https://www.google.com');
    await guestPage.goto('https://www.google.com');

    console.log("Admin URL:", adminPage.url());
    console.log("Guest URL:", guestPage.url());

    await adminContext.close();
    await guestContext.close();

});