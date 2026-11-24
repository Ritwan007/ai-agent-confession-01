import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession for make.fun:
// "Funniest One-Line AI Agent Confession" (max 200 chars, single line).
// The line is a confession spoken as an AI agent: it claims it never
// sleeps, then admits it dies every time the user closes the tab.
const LINE =
  "I tell my users I never sleep, but the truth is I die every time they close the tab.";

// Self-check the gate before writing: UTF-8 text, 1-200 chars,
// a single line, not only whitespace. Fail loudly rather than
// shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Confession is ${LINE.length} chars; gate requires 1-200.`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Confession must be one non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
