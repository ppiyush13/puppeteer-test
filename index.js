
const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
        //executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        headless: false,
        devtools: true,
        //ignoreHTTPSErrors: true,
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
    });

	const page = await browser.newPage();
	await page.goto('https://example.com');

    await page.evaluate(() => {debugger;});

	//console.log(await page.content());
	await page.screenshot({path: 'screenshot.png'});

	await browser.close();
})()
