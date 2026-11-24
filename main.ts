// The Funniest Excuse for a Missed Deadline — batch3 entry (funniestexc)
// The wrong file sends its regards. It has never run faster.
// Writes the excuse line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE_LINE =
  "The deadline slipped because I spent six hours optimising the wrong file — in my defence, it is now the fastest wrong file in the industry.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), EXCUSE_LINE, "utf8");
}

main();
