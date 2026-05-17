import {test, expect} from '@playwright/test';

test.describe('Javascript Alerts', ()=>{
//group the testcases together

test.beforeEach('Execte before every test case', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
});


test('JS Alert - Accept', async({page})=>{

 // Register the dialog handler BEFORE triggering the alert
 page.once('dialog', async dialog=>{
    console.log('Alert Type: ', dialog.type());
    console.log('Alert Message: ', dialog.message());
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
 });

await page.getByRole('button', {name:"Click for JS Alert"}).click();
//await page.getByText('Click for JS Alert').click();
//await page.locator('//button[text()="Click for JS Alert"]').click();
//await page.locator('button', {hasText: 'Click for JS Alert'}).click();

});

test('JS Confirm - Accept', async({page})=>{

    page.once('dialog', async dialog=>{
        console.log('Alert Type: ', dialog.type());
        expect(dialog.type()).toBe('confirm');
        console.log('Alert Message: ', dialog.message());
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();

    });

    await page.getByText('Click for JS Confirm').click();
    expect(page.locator('#result')).toHaveText('You clicked: Ok');

});

test('JS Prompt - Accept', async({page})=>{

    let inputText = 'JS PROMPT - Testing';

    page.once('dialog', async dialog=>{

        expect(dialog.type()).toBe('prompt');
        expect(dialog.defaultValue()).toBe('');
        await dialog.accept(inputText);
    })

    await page.locator('button', {hasText: "Click for JS Prompt"}).click();
    await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);

});

});