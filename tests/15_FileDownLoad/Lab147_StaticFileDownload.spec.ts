import{test, expect} from '@playwright/test';

test.describe('Static FileDownload', ()=>{

    test.beforeEach('Open the URL', async({page})=>{

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('File download - Static', async({page})=>{

        const[staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()

        ]);
        await staticDownload.saveAs('tests/15_FileDownLoad/downloads/sample-download.txt');
    });

});