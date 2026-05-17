import { test, expect, Locator } from '@playwright/test';

test('single file upload', async({ page }) => {
  // Open the upload page
  await page.goto('https://the-internet.herokuapp.com/upload');

  // Upload a single file
  await page.locator('#file-upload').setInputFiles('tests/14_FileUploadandDownLoad/testdata.txt');

  // Click upload button
  await page.locator('#file-submit').click();

  // Verify upload success
  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('testdata.txt');
});