import{test, expect, FrameLocator} from '@playwright/test';

test('Frames - Multiple IFrames', async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    
    //Main Frame
    const MainFrame = page.frameLocator("[name='main']");
    const header = await MainFrame.locator('h2').innerText();
    console.log(header);

    //To Find All Frames in the Locator
    const AllFrames = await page.locator('//frame').all();
    console.log('Frames Aavailable in the Page'+ AllFrames.length);

    // To Iterate within the frames, we use for loop
    for (const frame of AllFrames){
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    //Side Fraem
    const SideFrame = page.frameLocator("[name='side']");
    await SideFrame.getByTestId('side-link-registration').click();

    //Footer Frame

    const FooterFrame = page.frameLocator("[name='footer']");

});