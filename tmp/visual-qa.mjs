import { chromium } from 'file:///C:/Users/Welcome/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});

const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 950 } });
await desktopPage.goto('http://127.0.0.1:5173/#/docs/welcome', { waitUntil: 'networkidle' });
await writeFile('tmp/qa-desktop.png', await desktopPage.screenshot({ fullPage: false }));

const metrics = await desktopPage.evaluate(() => {
  const cards = Array.from(document.querySelectorAll('button')).filter((el) => el.textContent?.includes('Open lesson'));
  const figures = Array.from(document.querySelectorAll('figure'));
  const main = document.querySelector('main')?.getBoundingClientRect();
  const firstFigure = figures[0]?.getBoundingClientRect();
  const firstCard = cards[0]?.getBoundingClientRect();
  return {
    cards: cards.length,
    figures: figures.length,
    mainWidth: main ? Math.round(main.width) : 0,
    firstCard: firstCard ? { width: Math.round(firstCard.width), height: Math.round(firstCard.height) } : null,
    firstFigure: firstFigure ? { width: Math.round(firstFigure.width), height: Math.round(firstFigure.height) } : null,
    overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  };
});

const lessonButtons = desktopPage.locator('button').filter({ hasText: 'Open lesson' });
const lessonCount = await lessonButtons.count();
await lessonButtons.nth(0).click();
const modalVisible = await desktopPage.getByRole('dialog').isVisible();
const modalTitle = await desktopPage.locator('[role="dialog"] h2').innerText();
await writeFile('tmp/qa-modal.png', await desktopPage.screenshot({ fullPage: false }));

const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
await mobilePage.goto('http://127.0.0.1:5173/#/docs/welcome', { waitUntil: 'networkidle' });
await writeFile('tmp/qa-mobile.png', await mobilePage.screenshot({ fullPage: false }));

const mobileMetrics = await mobilePage.evaluate(() => ({
  overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  clientWidth: document.documentElement.clientWidth,
  scrollWidth: document.documentElement.scrollWidth,
  cardCount: Array.from(document.querySelectorAll('button')).filter((el) => el.textContent?.includes('Open lesson')).length,
}));

await browser.close();

console.log(JSON.stringify({ metrics, lessonCount, modalVisible, modalTitle, mobileMetrics }, null, 2));
