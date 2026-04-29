import {test, expect} from '@playwright/test';

test('GetByRole', async({page})=>{

    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await page.getByRole("link", {name:'Make Appointment', disabled:false}).click();

    let displaymsg = page.locator("//p[@class = 'lead']");
    await expect(displaymsg).toContainText("Please login to make appointment.");

});