import {test, expect, FrameLocator} from '@playwright/test';

test('Frames - Multiple Frames', async({page})=>{

    await page.goto('https://selectorshub.com/iframe-scenario/', { waitUntil: 'networkidle' });

     let frame1 = page.frameLocator('iframe#pact1').first();
     let frame2 = frame1.frameLocator('iframe#pact2');
     let frame3 = frame2.frameLocator('iframe#pact3');

     //Fill the details in Frame1 text field
     await frame1.locator('#inp_val').fill('Rashmika');

    //Fill the details in Frame1 text field
     await frame2.locator('#jex').fill('Mandana');   

    //Fill the details in Frame1 text field
     await frame3.locator('#glaf').fill('Playwright Automation');

    //Fetch value fro moutside Frames
    const text = await page.locator('//h4[text()="Free Tools"]').innerText();
    console.log(text);

    await page.waitForTimeout(5000);

});