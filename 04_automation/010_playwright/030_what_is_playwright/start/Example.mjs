import { chromium } from '@playwright/test';

// console.log(chromium);

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.dir(page);

  await page.goto('http://localhost:3000/');

  // css セレクター
  let getTitleLocater = await page.locator('.navbar-brand');
  let pageTitle = await getTitleLocater.innerText();
  console.log(pageTitle);

  // 文字列で要素を取得
  let textLocater = await page.locator('text=名刺管理アプリ');
  pageTitle = await textLocater.innerText();
  console.log(pageTitle);

  // xpathで要素を取得
  let xpathLocater = await page.locator('//*[@id="__next"]/nav/div/a');
  pageTitle = await xpathLocater.innerText();
  console.log(pageTitle);

  //await browser.close();
})();
