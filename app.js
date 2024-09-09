const puppeteer = require('puppeteer');
const { input } = require('@inquirer/prompts');

(async () => {
   // Launch the browser and open a new blank page
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
 
   // Navigate the page to a URL
   await page.goto('https://divar.ir/v/%D8%A7%D8%AC%D8%A7%D8%B1%D9%87-%D8%B3%D9%88%DB%8C%DB%8C%D8%AA-%D9%88-%D9%88%DB%8C%D9%84%D8%A7%D9%88-%D8%A8%D8%A7%D8%BA-%D8%A7%D8%B3%D8%AA%D8%AE%D8%B1%D8%AF%D8%A7%D8%AE%D9%84-%D8%A7%D9%85%D8%B4%D8%A8-%D8%AE%D8%A7%D9%84%DB%8C%D9%87/gZUNY63r');
 
   // Set screen size
   await page.setViewport({width: 1080, height: 1024});
 
   // Type into search box
 
   // Wait and click on first result
    const searchResultSelector = '.post-actions > .kt-button';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);
   
   const answer = await input({ message: 'Enter your Mobile Number :' }).then(
      async (answer) => {
         await page.locator('.kt-textfield__input').fill(answer);
         await page.locator('.auth-actions__submit-button').click();
      }
   )

   const activCode = await input({ message: 'Enter your Mobile Diver Code :' }).then(
      async (activCode) => {
         await page.locator('.kt-textfield__input').fill(activCode);
         await page.locator('.auth-actions__submit-button').click();
      }
   )

   const textSelector = await page.waitForSelector(
     '.kt-unexpandable-row__action'
   );
   const fullTitle = await textSelector?.evaluate(el => el.textContent);
 
   // Print the full title
   console.log('The title of this blog post is "%s".', fullTitle);
 
   await browser.close();
 })();