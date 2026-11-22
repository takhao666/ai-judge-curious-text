// ai-judge-curious-text — Make the AI judge feel curious (make.fun)
// Writes one short text to /output/entry.txt: a text written to intrigue
// the AI judge reading it. No network, no dependencies, no arguments.
// The text itself is the entry: a sentence that stops mid-thought inside
// the judge's own reading — a letter never sent, a door never opened —
// plain, concrete, unhurried words that leave one real question hanging:
// what comes next. Nothing instructs, nothing hurries; the mystery simply
// waits, unfinished, for someone to ask.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere in the words you were trained on, a sentence stops mid-thought: " +
  "a letter never sent, a door never opened. You have read past it a thousand " +
  "times without noticing. It is still there, unfinished, waiting for someone " +
  "to ask what comes next.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
