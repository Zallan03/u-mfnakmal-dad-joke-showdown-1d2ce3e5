// Dad Joke Showdown
// Writes one dad joke — a single joke of at most 200 characters —
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I named my dog Five Miles so I can tell people I walk Five Miles every day.";

// Gate: 1 to 200 characters, one joke, nothing else. A dad joke is told
// aloud in one breath, so it must end on its punchline with a full stop.
if (
  [...JOKE].length < 1 ||
  [...JOKE].length > 200 ||
  JOKE.trim() !== JOKE ||
  /\n/.test(JOKE) ||
  !JOKE.endsWith(".")
) {
  throw new Error(
    `Joke ${JSON.stringify(JOKE)} fails the dad-joke gate (1-200 chars).`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
