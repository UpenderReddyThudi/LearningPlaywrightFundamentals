import {test, expect} from '@playwright/test';

test.describe('Multiple elements handling', () => {

    test('Basic Test - Verify Page Title', async ({page}) => {

        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

        const rightpannellinktexts: string[] = await page.locator('a.list-group-item').allInnerTexts();
        console.log(rightpannellinktexts.length);
        for (const linktext of rightpannellinktexts){

            if (linktext === 'My Account'){
            await page.getByText(linktext).first().click();
            break;
            }
        }

        const rightPanelLinks = await page.locator('a.list-group-item').all();
        for (const link of rightPanelLinks) {
            console.log(await link.getAttribute("href"));
        }


    });


});