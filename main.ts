// The Agent's Uh-Oh — one-word entry.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one word (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// "Backtracking": the search-algorithm move of undoing a path that led
// nowhere and retreating to try another. An agent that blurts this out
// has hit a dead end and is visibly rewinding — machine voice, instant,
// and fresh in the field (no identical entry at the last check; the
// first-choice word "Deadlock" was already taken by another entrant).
const WORD = "Backtracking";

// Gate guard: the sealed scorer accepts 1-99 UTF-8 chars, not only whitespace.
if ([...WORD].length < 1 || [...WORD].length > 99 || !WORD.trim() || WORD.includes("\n")) {
  throw new Error("entry word violates the 1-99 char single-word gate");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", WORD, "utf8");
