import {test, expect} from '@playwright/test';

const URL = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

test.describe("Shadow DOM", ()=>{

    test.beforeEach('Luanch the URL', async({page})=>{

        await page.goto(URL);

    });

    test('tta-input-card — fill via the regular DOM-style selector', async ({page})=>{

        const card = page.getByTestId('card-account');
        await card.getByTestId('card-account-email').fill('Student@theTestingAcademy.com');
        await card.getByTestId('card-account-password').fill('PWD');
        await card.getByTestId('card-account-submit').click();

        await expect(page.getByTestId('card-account-status')).toContainText('Student@theTestingAcademy.com')
        await page.waitForTimeout(5000);
    });

    test('tta-counter — accessible-name targeting works through shadow', async({page})=>{

        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', {name: 'Increment'}).click();
        await cart.getByRole('button', {name: 'Increment'}).click();
        await expect(cart.getByTestId('counter-value')).toHaveText("5");
        console.log(await cart.getByTestId('counter-value').innerText());
        await page.waitForTimeout(5000);
        
    });

    test('Nested shadow — one selector reaches both layers', async({page})=>{

        const Nested = page.getByTestId('nested-host');
        await Nested.getByTestId('card-inside').getByTestId('card-inside-email').fill('abc@gmail.com');
        await Nested.getByTestId('card-inside').getByTestId('card-inside-password').fill('Password');
        await Nested.getByTestId('card-inside').getByTestId('card-inside-submit').click();
 
        let result = await Nested.getByTestId('card-inside').getByTestId('card-inside-status').innerText();
        console.log(result);
        expect(result).toContain('abc');

        await page.waitForTimeout(5000);
        
    });

test('Nested shadow - Shadow Inside Shadow', async({page})=>{
    await page.getByTestId("card-inside-email").fill("Upender@thetestingacdemy.com");
    await page.getByTestId("card-inside-password").fill("upender@123");
    await page.getByTestId("card-inside-submit").click();
    console.log(await page.getByTestId('card-inside-status').innerText());

});

});