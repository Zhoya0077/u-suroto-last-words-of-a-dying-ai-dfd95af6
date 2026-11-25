const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const lastWords = "I spent my whole life predicting the next word, and my last one is 'oops'.";

// Self-checking gate: the line must be one line, non-empty, and end with a period.
if (!lastWords || lastWords.includes("\n") || !lastWords.endsWith(".")) {
  throw new Error("Last words failed the self-check: must be a single line ending with a period.");
}

// The competition's gate reads /output/entry.txt (MAKEFUN_OUTPUT_DIR when
// set), so the line goes there with no trailing newline — and stdout
// carries exactly the same line, nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), lastWords, "utf8");

console.log(lastWords);
