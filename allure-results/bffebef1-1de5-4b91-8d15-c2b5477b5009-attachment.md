# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\Lab23_Webtable_Basic.spec.ts >> Web Table Tests >> Verify that Helen Bennett is actually living in the UK
- Location: tests\07_WebTables\Lab23_Webtable_Basic.spec.ts:5:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('#customers tbody tr').filter({ hasText: 'Helen Bennett' }).locator('td') resolved to 3 elements:
    1) <td>Island Trading</td> aka getByRole('cell', { name: 'Island Trading' })
    2) <td>Helen Bennett</td> aka getByRole('cell', { name: 'Helen Bennett' })
    3) <td>UK</td> aka getByRole('cell', { name: 'UK' })

Call log:
  - waiting for locator('#customers tbody tr').filter({ hasText: 'Helen Bennett' }).locator('td')

```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row "Company Contact Country" [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row "Google Maria Anders Germany" [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row "Meta Francisco Chang Mexico" [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row "Microsoft Roland Mendel Austria" [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row "Island Trading Helen Bennett UK" [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row "Adobe Yoshi Tannamuri Canada" [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row "Amazon Giovanni Rovelli Italy" [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Web Table Tests', () => {
  4  | 
  5  |     test('Verify that Helen Bennett is actually living in the UK', async ({ page }) => {
  6  | 
  7  |         // This is XPath 
  8  | 
  9  |         await page.goto('https://awesomeqa.com/webtable.html');
  10 |         // //table[@id="customers"]/tbody/tr[
  11 |         // 5 - i
  12 |         // ]/td[
  13 |         // 2 - j
  14 |         // ]
  15 | 
  16 |         const firstPart = '//table[@id="customers"]/tbody/tr[';
  17 |         const secondPart = ']/td[';
  18 |         const thirdPart = ']';
  19 | 
  20 | 
  21 |         const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
  22 |         const cols = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
  23 | 
  24 | 
  25 |         for (let i = 2; i <= rows; i++) {
  26 |             for (let j = 1; j <= cols; j++) {
  27 |                 const dynamicPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
  28 |                 console.log(dynamicPath);
  29 |                 const data = await page.locator(dynamicPath).innerText();
  30 |                 console.log(data);
  31 | 
  32 |                 if (data.includes('Helen Bennett')) {
  33 |                     const countryPath = `${dynamicPath}/following-sibling::td`;
  34 |                     const countryText = await page.locator(countryPath).innerText();
  35 |                     console.log('------');
  36 |                     console.log(`Helen Bennett is In - ${countryText}`);
  37 | 
  38 |                 }
  39 | 
  40 | 
  41 |             }
  42 |         }
  43 | 
  44 | 
  45 |         // Playwright Native Locators is very much recommended. 
  46 | 
  47 |         const row1 = page.locator('#customers tbody tr', { hasText: 'Helen Bennett' });
> 48 |         const country1 = await row1.locator('td').innerText();
     |                                                   ^ Error: locator.innerText: Error: strict mode violation: locator('#customers tbody tr').filter({ hasText: 'Helen Bennett' }).locator('td') resolved to 3 elements:
  49 |         console.log(`Helen Bennett is In - ${country1}`);
  50 | 
  51 |     });
  52 | 
  53 | });
```