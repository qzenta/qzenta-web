/**
 * tiktok-login.mjs
 *
 * One-time (re-run whenever the session expires) manual login step for
 * TikTok posting automation. Opens a real, visible browser window so
 * whoever runs this can log in and pass 2FA themselves - no credentials
 * are ever typed, stored, or seen by this script. Once logged in,
 * Playwright's storage state (cookies + local storage) is saved to a
 * local, gitignored file that tiktok-post.mjs reuses headlessly.
 *
 * Target account for this pilot: the Nerkke account, already linked under
 * the qzentahq TikTok Business Center with organic posting permission
 * (Sikatrix's own TikTok account is separately blocked on a phone-
 * verification SIM issue - parked on Daniel's end, not related to this
 * script or account).
 *
 * Usage:
 *   node scripts/tiktok-login.mjs
 *   (log in + pass 2FA in the window that opens, then come back and press
 *   Enter in this terminal)
 */

import { chromium } from "playwright";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const STATE_PATH = resolve(ROOT, ".playwright-tiktok-state.json");

function waitForEnter(prompt) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => rl.question(prompt, () => { rl.close(); res(); }));
}

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();

console.log("\nOpening TikTok login...");
await page.goto("https://www.tiktok.com/login");

await waitForEnter(
  "\nLog in as the Nerkke account (and complete 2FA if prompted) in the browser\n" +
  "window, confirm you land on your feed/profile fully logged in, then press\n" +
  "Enter here to save the session...\n"
);

await context.storageState({ path: STATE_PATH });
console.log(`\n✅  Session saved to ${STATE_PATH}`);
console.log("    This file is gitignored - it never leaves this machine.");
console.log("    Re-run this script whenever tiktok-post.mjs reports the session expired.\n");

await browser.close();
