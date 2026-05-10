import {test, expect} from '@playwright/test';

test('Assignment6 - Hover', async({page})=>{

    
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Meal').click();

    let JSONMessage = await page.getByTestId('hover-output').innerText();
    console.log(JSONMessage);
    expect(JSONMessage).toContain('"testId": "test-id-Meal"');

    await page.waitForTimeout(5000);

});