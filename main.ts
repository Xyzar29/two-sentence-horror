// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253)
//
// Writes a single two-sentence horror story to /output/entry.txt.
// The story is fixed text: deterministic, no randomness, no network, no
// input files. The gate requires 1-400 characters of UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "I finally nailed down the loose floorboard in the hallway, the one that creaked every night at three in the morning. " +
  "It still creaks at three in the morning, and now it creaks half a second before I take each step.";

// Gate self-check: exactly two sentences, 1-400 characters, not only
// whitespace. Fail loudly instead of writing an entry the gate would refuse.
const sentences = STORY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 2) {
  throw new Error(`expected exactly 2 sentences, got ${sentences.length}`);
}
if ([...STORY].length < 1 || [...STORY].length > 400 || STORY.trim().length === 0) {
  throw new Error(`story length ${[...STORY].length} is outside the 1-400 char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
