import{test, expect} from '@playwright/test';

test('Verify error message', async({page})=>{

await page.goto('https://app.vwo.com/#/login');

await page.getByRole('textbox', {name:'Email' }).fill("Admin");
await page.getByRole('textbox', {name:'password' }).fill("Admin@123");
await page.getByRole('button', {name:'Sign in', exact:true }).click();

let errormsg = page.locator('#js-notification-box-msg');
await expect(errormsg).toBeVisible();
await expect(errormsg).toContainText("Your email, password, IP address or location did not match");

})

