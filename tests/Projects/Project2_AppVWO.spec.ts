import{test, expect} from '@playwright/test';

test('Verify error message', async({page})=>{

await page.goto('https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');

//await page.pause(); //To Find elements using getByRole
//await page.waitForTimeout(2000);
await page.getByRole('button', { name: 'Allow Cookies' }).click();
//await page.waitForTimeout(2000);
await page.getByRole('textbox', {name:'email' }).pressSequentially('Admin@gmail.com', {delay:200});;
//await page.waitForTimeout(2000);
let errormsg = page.getByText("gmail.com doesn't look like a business domain. Please use your business email.");
await expect(errormsg).toBeVisible();
await expect(errormsg).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");

});