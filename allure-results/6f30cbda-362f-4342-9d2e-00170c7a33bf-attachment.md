# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assignments\Assignment03_TTABank.spec.ts >> TTA Bank - Money Transfer
- Location: tests\Assignments\Assignment03_TTABank.spec.ts:3:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('mt-2 text-3xl font-bold')
Expected: "$50,000.00"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('mt-2 text-3xl font-bold')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: TTA Bank
      - navigation [ref=e12]:
        - button "Dashboard" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
          - text: Dashboard
        - button "Transfer Funds" [ref=e19] [cursor=pointer]:
          - img [ref=e20]
          - text: Transfer Funds
        - button "Expense Tracker" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
          - text: Expense Tracker
        - button "Transactions" [ref=e27] [cursor=pointer]:
          - img [ref=e28]
          - text: Transactions
        - button "AI Support" [ref=e32] [cursor=pointer]:
          - img [ref=e33]
          - text: AI Support
        - button "Settings" [ref=e35] [cursor=pointer]:
          - img [ref=e36]
          - text: Settings
      - generic [ref=e39]:
        - generic [ref=e40]:
          - img "User" [ref=e41]
          - generic [ref=e42]:
            - generic [ref=e43]: upenderreddyt
            - generic [ref=e44]: upender@example.com
        - button "Sign Out" [ref=e45] [cursor=pointer]:
          - img [ref=e46]
          - text: Sign Out
    - main [ref=e49]:
      - generic [ref=e50]:
        - heading "Dashboard" [level=1] [ref=e51]
        - button [ref=e53] [cursor=pointer]:
          - img [ref=e54]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - paragraph [ref=e64]: Total Balance
                - heading "$50,000.00" [level=3] [ref=e65]
              - img [ref=e67]
            - generic [ref=e70]:
              - generic [ref=e71]:
                - img [ref=e72]
                - text: +2.5%
              - generic [ref=e75]: from last month
          - generic [ref=e76]:
            - generic [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: Monthly Income
                - heading "$50,000" [level=3] [ref=e80]
              - img [ref=e82]
            - paragraph [ref=e85]: Based on recent activity
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - paragraph [ref=e89]: Monthly Expenses
                - heading "$315.48" [level=3] [ref=e90]
              - img [ref=e92]
            - paragraph [ref=e95]: Total debit transactions
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Balance History" [level=3] [ref=e98]
            - application [ref=e102]:
              - generic [ref=e111]:
                - generic [ref=e112]:
                  - generic [ref=e114]: Mon
                  - generic [ref=e116]: Tue
                  - generic [ref=e118]: Wed
                  - generic [ref=e120]: Thu
                  - generic [ref=e122]: Fri
                  - generic [ref=e124]: Sat
                  - generic [ref=e126]: Sun
                - generic [ref=e127]:
                  - generic [ref=e129]: $0k
                  - generic [ref=e131]: $15k
                  - generic [ref=e133]: $30k
                  - generic [ref=e135]: $45k
                  - generic [ref=e137]: $60k
          - generic [ref=e138]:
            - generic [ref=e139]:
              - heading "Recent Activity" [level=3] [ref=e140]
              - button "View All" [ref=e141] [cursor=pointer]
            - generic [ref=e142]:
              - generic [ref=e143]:
                - generic [ref=e144]:
                  - img [ref=e146]
                  - generic [ref=e148]:
                    - paragraph [ref=e149]: Whole Foods Market
                    - paragraph [ref=e150]: 10/25/2023
                - generic [ref=e151]: "-$129.99"
              - generic [ref=e152]:
                - generic [ref=e153]:
                  - img [ref=e155]
                  - generic [ref=e158]:
                    - paragraph [ref=e159]: Opening Deposit
                    - paragraph [ref=e160]: 10/24/2023
                - generic [ref=e161]: +$50000.00
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - img [ref=e165]
                  - generic [ref=e167]:
                    - paragraph [ref=e168]: Netflix Subscription
                    - paragraph [ref=e169]: 10/23/2023
                - generic [ref=e170]: "-$15.99"
              - generic [ref=e171]:
                - generic [ref=e172]:
                  - img [ref=e174]
                  - generic [ref=e176]:
                    - paragraph [ref=e177]: Uber Ride
                    - paragraph [ref=e178]: 10/22/2023
                - generic [ref=e179]: "-$24.50"
            - button "Quick Transfer" [ref=e180] [cursor=pointer]
  - generic [ref=e181]: $0k
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('TTA Bank - Money Transfer', async({page})=>{
  4  | 
  5  |     //Navigate to the TTA Bank URL
  6  |     await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  7  |     
  8  |     //Click on Signup button
  9  |     await page.getByRole('button', {name: 'Sign Up'}).click();
  10 | 
  11 |     //await page.pause(); //To Find elements using getByRole
  12 | 
  13 |     //Fill the Sign Up Form and Clieck on Craete Account button
  14 |     await page.getByPlaceholder('John Doe').fill('upenderreddyt');
  15 |     await page.getByPlaceholder('you@example.com').fill('upender@example.com');
  16 |     await page.locator("input[type='password']").fill('TTABankLogin');
  17 |     await page.getByRole('button', {name:'Create Account'}).click();
  18 | 
  19 |     //Verify Initial Balance - $50,000.00
> 20 |     await expect(page.locator("mt-2 text-3xl font-bold")).toHaveText("$50,000.00");
     |                                                           ^ Error: expect(locator).toHaveText(expected) failed
  21 | 
  22 |     //Navigate to Transfer Funds
  23 |     await page.getByText('Transfer Funds').click();
  24 | 
  25 |     // Fill in the Transfer Funds Form to Transfer $5000 to the account number 1234576890
  26 |     await page.getByPlaceholder('0.00').fill('5000');
  27 |     await page.getByPlaceholder('e.g. Rent for October').fill('Playwright Course Payment');
  28 |     await page.getByRole('button',{name:'Continue'}).click();
  29 | 
  30 |     //Click on Confirm Transfer
  31 |     await page.getByRole('button', {name:'Confirm Transfer'}).click();
  32 | 
  33 |     //Navigate to Dashboard and verify the Balance amount 
  34 |     await page.getByText('Dashboard').click();
  35 |     await expect(page.locator(".mt-2.text-3xl.font-bold")).toHaveText("$45,000.00");
  36 | 
  37 |     //Logout from the TTA Bank
  38 |     await page.getByRole('button', {name: 'Sign Out'}).click();
  39 | 
  40 | });
  41 | 
```