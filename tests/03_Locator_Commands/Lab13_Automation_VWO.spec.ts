import { test, expect } from "@playwright/test";

test('Locators are Lazy, Strict and autowait', async({page}) => {

    await page.goto("https://app.vwo.com/#login");
    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >
    // Rule 2 - Css Seecltor 
    // id -> #
    // class -> .

    await page.locator('#login-username').fill('Admin');
    await page.locator('#login-password').fill('pass123');
    await page.locator('#js-login-btn').click();

    console.log("All actions completed ✅");

    let errormessage = page.locator('#js-notification-box-msg');

    await expect(errormessage).toContainText('Your email, password, IP address or location did not match');

});