import{test, expect} from '@playwright/test';

test.describe('Group the Test Cases', ()=>{

    test.beforeEach('Open the Base URL', async({page})=>{

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

    });

    // test('Scrool To View - 1', async({page})=>{
    //     //1. scrollIntoViewIfNeeded - playwright does not scroll be default
    //     await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
    //     await page.getByTestId('deep-anchor').click();
    //     await page.waitForTimeout(5000);
    // });

    // test('Scrool To View - 2', async({page})=>{
    //     //2. scroolBy 100Px
    //     await page.evaluate( () => window.scrollBy(0,100));
    //     await page.waitForTimeout(5000);
    // });

    // test('Scrool To View - 3', async({page})=>{
    //     //3. ScrollTo Bottom
    //     await page.evaluate( () => window.scrollTo(0,document.body.scrollHeight));
    //     await expect(page.locator('#cta-button')).toBeEnabled();
    //     await page.waitForTimeout(5000);
    // });

    // test('Scrool To View - 4', async({page})=>{
    //     //4. ScrollTo Top
    //     await page.evaluate( () => window.scrollTo(0,0));
    //     await expect(page.getByTestId('scroll-deep')).toBeEnabled();
    //     await page.waitForTimeout(5000);
    // });

    test('Scrool To View - 5', async({page})=>{
        //5. Lazylist grow past 10 once visible
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');
        const InitialCount = await list.count();
        console.log('InitialCount: ' + InitialCount);

        //Poll until new items appended
        await expect.poll(async() => list.count(),{
            message: 'expected lazy list to load more items',
            timeout: 10000,
        }).toBeGreaterThan(10);

        const finalCount = await list.count();
        console.log('FinalCount: ' + finalCount);

        await page.waitForTimeout(5000);
    });

});