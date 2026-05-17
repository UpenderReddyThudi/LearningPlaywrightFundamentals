import { test, expect, Locator } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-safe __dirname for projects using "type": "module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = 'https://the-internet.herokuapp.com/upload'; // replace with target page

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {

        const filePath = path.join(__dirname, 'testdata.txt'); // fetch the file from current directory
        console.log('File path:', filePath);

        await page.locator("#file-upload").setInputFiles([filePath]);

        await page.getByRole("button", { name: "Upload" }).click();

        // Validate the name of file uploaded
        await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');

        await page.waitForTimeout(2000);

    });

});