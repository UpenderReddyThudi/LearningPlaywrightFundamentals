import {test, expect} from '@playwright/test';

test.describe('Group the test cases', ()=>{

    test.beforeEach('Open the URL', async({page})=>{
        await page.goto('https://selectorshub.com/xpath-practice-page/');
    });

    test('Locate Shadow DOM and fill thevalues', async({page})=>{

        await page.locator('#kils').fill('UpenderReddyT');
        await page.locator('#pizza').fill('Dominos PIZZA');
        //await page.locator('#training').fill('Learning'); //Shadow Root Closed - Can't Automate
        await page.getByPlaceholder('enter password').fill('Learning');
        let buttonName = await page.getByText('Click to practice iframe inside shadow dom scenario').innerText();
        console.log('Name: ' + buttonName);

        await page.waitForTimeout(5000);

    });
});