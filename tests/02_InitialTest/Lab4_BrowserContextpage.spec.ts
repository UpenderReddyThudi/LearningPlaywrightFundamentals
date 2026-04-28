import {chromium, Browser, BrowserContext, Page} from 'Playwright';

async function run() {
    //Level 1: Launch Browser - Heaviest once, do it once
    let browser: Browser = await chromium.launch({headless: false});
    console.log("Browser Launch", browser);

    // LEVEL 2: Create context - fresh session, isolated cookies
    let context: BrowserContext = await browser.newContext();
    console.log("Context created", context);

    
    // LEVEL 3: Open page — a tab inside the context
    let page: Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://google.com");
    console.log("Title:", await page.title());

    // Cleanup — reverse order
    await page.close();
    await context.close();
    await browser.close();

}

run();