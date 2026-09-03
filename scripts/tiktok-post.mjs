/**
 * tiktok-post.mjs
 *
 * Uploads a video to TikTok via browser automation, replacing the need for
 * TikTok's Content Posting API (which is approval-gated and restrictive for
 * auto-posting, unlike LinkedIn/FB). Target account for this pilot: the
 * Nerkke account, linked under the qzentahq TikTok Business Center with
 * organic posting permission.
 *
 * Requires a saved login session - run scripts/tiktok-login.mjs once first
 * (and again whenever this script reports the session expired).
 *
 * Usage:
 *   node scripts/tiktok-post.mjs <path-to-video.mp4> "<caption text>"
 *
 * IMPORTANT - first run needs supervision: this was built by reading
 * TikTok's known web-upload flow structure, but it has never been run
 * against a live, logged-in session (no TikTok credentials were available
 * to do that). The first real run should be watched
 * (TIKTOK_POST_HEADFUL=1 node scripts/tiktok-post.mjs ...) to confirm the
 * selectors below still match what TikTok actually renders - their upload
 * UI has changed layout more than once (classic /upload flow vs. the newer
 * TikTok Studio) and is not a stable public API.
 */

import { chromium } from "playwright";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const STATE_PATH = resolve(ROOT, ".playwright-tiktok-state.json");
const POSTED_LOG_PATH = resolve(ROOT, "data", "tiktok-posted.json");
const DEBUG_HEADFUL = process.env.TIKTOK_POST_HEADFUL === "1";
const UPLOAD_URL = "https://www.tiktok.com/tiktokstudio/upload?from=upload";

const videoPath = process.argv[2];
const caption = process.argv[3];

if (!videoPath || !caption) {
  console.error("Usage: node scripts/tiktok-post.mjs <path-to-video.mp4> \"<caption text>\"");
  process.exit(1);
}
if (!existsSync(videoPath)) {
  console.error(`❌  Video file not found: ${videoPath}`);
  process.exit(1);
}
if (!existsSync(STATE_PATH)) {
  console.error("❌  No saved TikTok session found.");
  console.error("    Run: node scripts/tiktok-login.mjs");
  process.exit(1);
}

function logPostedVideo(entry) {
  let log = [];
  if (existsSync(POSTED_LOG_PATH)) {
    try {
      log = JSON.parse(readFileSync(POSTED_LOG_PATH, "utf8"));
    } catch {
      log = [];
    }
  }
  log.push(entry);
  mkdirSync(dirname(POSTED_LOG_PATH), { recursive: true });
  writeFileSync(POSTED_LOG_PATH, JSON.stringify(log, null, 2) + "\n", "utf8");
}

const browser = await chromium.launch({ headless: !DEBUG_HEADFUL });
const context = await browser.newContext({ storageState: STATE_PATH });
const page = await context.newPage();

try {
  console.log(`\n📤  Uploading "${basename(videoPath)}" to TikTok (Nerkke account)...`);
  await page.goto(UPLOAD_URL, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.waitForTimeout(3000);

  if (page.url().includes("/login")) {
    throw new Error("SESSION_EXPIRED");
  }

  // File input for the video. TikTok's upload page keeps this input in the
  // DOM even before any drag-and-drop zone is visible.
  const fileInput = page.locator('input[type="file"]').first();
  await fileInput.setInputFiles(videoPath, { timeout: 15000 });
  console.log("   Video selected, waiting for TikTok to process it...");

  // Upload/processing can take a while for longer videos - wait for the
  // caption editor to become interactable as the signal that processing
  // finished enough to continue.
  const captionEditor = page.locator('[contenteditable="true"], textarea[placeholder*="caption" i]').first();
  await captionEditor.waitFor({ state: "visible", timeout: 120000 });
  await page.waitForTimeout(2000); // let any auto-generated caption/hashtags settle

  // Clear any pre-filled text, then type the real caption.
  await captionEditor.click();
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Delete");
  await captionEditor.type(caption, { delay: 20 });
  console.log("   Caption entered.");

  // Post button - TikTok labels this "Post" (classic) or "Post now" (studio).
  const postButton = page.getByRole("button", { name: /^post(\s+now)?$/i }).first();
  await postButton.waitFor({ state: "visible", timeout: 30000 });

  // Give TikTok a moment to finish any final upload validation before the
  // button is truly clickable (it can render enabled slightly before it
  // actually is).
  await page.waitForTimeout(3000);
  await postButton.click();

  // Confirm the post actually went through - TikTok typically navigates to
  // a success/confirmation state or shows a toast.
  await page.waitForTimeout(5000);
  const stillOnUploadPage = page.url().includes("/upload");

  const entry = {
    file: basename(videoPath),
    caption,
    postedAt: new Date().toISOString(),
    account: "nerkke",
    businessCenter: "qzentahq",
    confirmed: !stillOnUploadPage,
  };
  logPostedVideo(entry);

  if (stillOnUploadPage) {
    console.log("\n⚠️  Still on the upload page after clicking Post - unconfirmed.");
    console.log("    Logged as unconfirmed in data/tiktok-posted.json. Check manually.");
    console.log("    Re-run with TIKTOK_POST_HEADFUL=1 to watch it live.");
    process.exit(1);
  }

  console.log(`\n✅  Posted and logged to data/tiktok-posted.json`);
} catch (err) {
  if (err.message === "SESSION_EXPIRED") {
    console.error("\n❌  TikTok session expired.");
    console.error("    Run: node scripts/tiktok-login.mjs");
    process.exit(1);
  }
  console.error("\n❌  Post failed:", err);
  console.error("    Re-run with TIKTOK_POST_HEADFUL=1 to watch it live and compare");
  console.error("    the page against the selectors in this script.");
  process.exit(1);
} finally {
  await browser.close();
}
