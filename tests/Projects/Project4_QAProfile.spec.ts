import { test, expect } from '@playwright/test';

test('Complete the QA profile', async ({ page }) => {
    
    // Navigate to the QA profile form page
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    //await page.pause(); //To find elements

    //Fill the First Name and Last Name
    await page.locator('#first-name').fill('Upender Reddy');
    await page.locator('#last-name').fill('Thudi');

    //Select the Gender
    await page.getByTestId('gender-male').check();

    //Select Years of Experiance
    await page.locator('#years-experience').selectOption('7');

    //Select Date Value
    await page.getByTestId('profile-date').pressSequentially('10052026');

    //Select Profession
    await page.getByRole('radio', {name: 'Automation Tester'}).click();

    //Select Technical Skill
    await page.getByTestId('tool-uft').check();

    //Select Regions worked
    await page.getByTestId('continent-asia').check();
    await page.getByTestId('continent-australia').check();

    //Click on Selenium Commands
    await page.getByTestId('tab-webelement').click();

    let WebelementCommands = await page.locator('#selenium-tab-panel').innerText();
    console.log(WebelementCommands);
    expect(WebelementCommands).toContain('WebElement commands');

    //Save the Profile
    await page.getByTestId('profile-submit').click();

    //Verify the JSONOutput
    let JSONOutput = await page.locator('#submission-output').innerText();
    console.log(JSONOutput);
    expect(JSONOutput).toContain('"firstName": "Upender Reddy"');   

    await page.waitForTimeout(5000);

});