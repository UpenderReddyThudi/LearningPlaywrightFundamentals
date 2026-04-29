import {test, expect} from '@playwright/test';

test('Locators are Lazy, strict and Auto-Wait', async({page})=> {
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
    // Create locators — nothing happens yet (lazy)
    // let usernameField = page.locator("#login-username");

let username = page.locator("xpath=//input[@id='login-username']");
let password = page.locator("#login-password");
let loginbtn = page.locator("#js-login-btn");

 // NOW Playwright finds the element and acts (auto-wait)

 await username.fill("Admin");
 await password.fill("Admin@1234");
 await loginbtn.click();

 console.log("All Action Items closed");

 let errormsg = page.locator("#js-notification-box-msg");
 await expect(errormsg).toContainText("Your email, password, IP address or location did not match");

});
