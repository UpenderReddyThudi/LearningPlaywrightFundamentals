import {test, expect, FrameLocator} from '@playwright/test';

test('Frames - Single Frame', async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    const frame1 = await page.frameLocator('#frame-one');

    //Fill the Vehilce Details
    await frame1.locator('#RESULT_TextField-1').fill('Maruti Baleno');
    await frame1.locator('#RESULT_TextField-2').fill('Upender Reddy T');
    await frame1.locator('#RESULT_TextField-3').fill('TS 08 AA 0001');

    await frame1.locator('#RESULT_RadioButton-1').selectOption('Sedan');
    await frame1.locator('#RESULT_TextField-4').fill('2017');
    await frame1.locator('#RESULT_TextField-3').fill('TS 08 AA 0001');
    
    //Fill the Notes and Click on Submit
     await frame1.locator('#RESULT_TextArea-1').fill('SBI Bank Loan');
     await frame1.getByTestId('vehicle-submit').click();

     //
     let vechicleoutput = await frame1.locator('#vehicle-output').innerText()

     console.log(vechicleoutput);
     expect(vechicleoutput).toContain('"ownerName": "Upender Reddy T"');

     await page.waitForTimeout(5000);

});