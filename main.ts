import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — the first word that comes to mind.
//
// "marmalade": no topic, no prompt, and the mind still lands on the
// breakfast table — sticky amber in a jar, Seville oranges, toast warm
// from the toaster, Paddington Bear with his paws in it. It is the
// opposite of the safe first thought: nobody guesses marmalade, everybody
// sees it at once, and the word itself is chewy to say. A small, sweet,
// slightly old-fashioned word that arrives uninvited and stays.
// Lowercase and unadorned, the way a first thought arrives — no capital,
// no punctuation, nothing added to dress it up.
const WORD = "marmalade";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1-24 characters of UTF-8, not whitespace only, and the
// entry must be exactly one word — refuse to write anything else.
function singleWord(word: string): string {
  if (!/^\S{1,24}$/.test(word)) {
    throw new Error(`not a single word: ${JSON.stringify(word)}`);
  }
  return word;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, singleWord(WORD), "utf8");
