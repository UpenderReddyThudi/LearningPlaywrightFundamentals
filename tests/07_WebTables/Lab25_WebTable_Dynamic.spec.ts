import{test, expect} from '@playwright/test';


test('Dynamic WebTable', async({page})=>{

await page.goto('https://awesomeqa.com/webtable1.html');

 // Playwright Native Locator Strategy 
const rows = page.locator('table[summary="Sample Table"] tbody tr');
const rowcount = await rows.count();
console.log(rowcount);

for (let i=0; i<rowcount; i++){
const rowdata = await rows.nth(i).locator('td').allInnerTexts();
console.log(`Row ${i+1}:`, rowdata);

}


});