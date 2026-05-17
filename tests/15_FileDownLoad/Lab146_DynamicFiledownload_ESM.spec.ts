import{test, expect} from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM-safe __dirname for projects using "type": "module"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe('FileDownload - ESM', ()=>{

    test.beforeEach('Open the URL', async({page})=>{

        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('File Download - Dynamic', async({page})=>{

    const[download] = await Promise.all([

        page.waitForEvent('download'),
        page.getByTestId('download-text').click()
    ]);
    expect(download.suggestedFilename()).toContain('tta-notes');
    await download.saveAs(path.join(__dirname, 'downloads', 'tta-notes.txt'));

    });
});