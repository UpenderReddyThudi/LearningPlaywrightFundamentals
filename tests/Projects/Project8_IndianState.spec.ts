import {test, expect} from '@playwright/test';

test.describe('Group the Testcases', ()=>{

    test.beforeEach('Open theURL', async({page})=>{
        await page.goto('https://simplemaps.com/svg/country/in');
    });

    test('Indiamap - Telangana state', async({page})=>{
        const stateNames = await page.locator('//div[@id="admin1"]//*[name()="text" and contains(@class, "sm_label")]').allTextContents();
        //const stateNames = await page.locator('//div[@id="admin1_map_inner"]//*[name()="svg"]//*[name()="text" and contains(@class,"sm_label")]').allTextContents();

        console.log(stateNames);

        for (const state of stateNames){

            if(state.trim()==='Telangana'){
                await page.locator('//*[name()="path" and contains(@class,"sm_state sm_state_INTG")]').click();
                console.log("Clicked on Telangana");

            }
        }

    });
});