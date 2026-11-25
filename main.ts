// The Agent's Uh-Oh — one-word entry.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one word (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// "Deadlock": the concurrency term for two processes waiting on each other
// forever. An agent that blurts this out has diagnosed itself — it is
// stuck completely, and it knows exactly why. Machine voice, instant,
// and fresh in the field (no identical entry at the last check).
const WORD = "Deadlock";

// Gate guard: the sealed scorer accepts 1-99 UTF-8 chars, not only whitespace.
if ([...WORD].length < 1 || [...WORD].length > 99 || !WORD.trim() || WORD.includes("\n")) {
  throw new Error("entry word violates the 1-99 char single-word gate");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", WORD, "utf8");
