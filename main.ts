// Star Ghost — the entry program for the Post X bounty.
// The entry is the post itself: this program only copies POST.json from the
// repository root into /output/POST.json, where the house's gate reads it.
// It takes no arguments, reads no network and no clock, and writes the same
// bytes on every run, so the two grading runs agree. The game it ships is
// game.html: a little ghost collects stars and dodges bats for 60 seconds.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json out of ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
