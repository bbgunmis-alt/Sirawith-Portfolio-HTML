const fs = require('fs');
const puppeteer = require('puppeteer');
const chromeLauncher = require('chrome-launcher');

(async () => {
    const url = 'http://localhost:8080';
    
    // Dynamically import lighthouse
    const { default: lighthouse } = await import('lighthouse');
    
    // Launch Chrome using chrome-launcher
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    
    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
        formFactor: 'mobile',
        screenEmulation: {
            mobile: true,
            width: 390,
            height: 844,
            deviceScaleFactor: 3,
            disabled: false,
        }
    };
    
    console.log('Running Lighthouse...');
    const runnerResult = await lighthouse(url, options);
    
    const reportHtml = runnerResult.report;
    fs.writeFileSync('lighthouse_report.html', reportHtml);
    
    console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
    console.log('Accessibility score was', runnerResult.lhr.categories.accessibility.score * 100);
    console.log('Best Practices score was', runnerResult.lhr.categories['best-practices'].score * 100);
    console.log('SEO score was', runnerResult.lhr.categories.seo.score * 100);
    
    // Now capture screenshot using Puppeteer with the same browser
    console.log('Taking screenshot...');
    const browser = await puppeteer.connect({
        browserURL: `http://localhost:${chrome.port}`
    });
    
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
    await page.goto(url, { waitUntil: 'networkidle2' });
    
    // Wait for GSAP animations if any
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await page.screenshot({ path: 'mobile_hero.png' });
    console.log('Screenshot saved to mobile_hero.png');
    
    await browser.disconnect();
    await chrome.kill();
})();
