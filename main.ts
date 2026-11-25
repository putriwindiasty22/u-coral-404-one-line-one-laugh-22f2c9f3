import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single original one-liner, max 200 characters.
const line =
  "I finally hit inbox zero this morning, then my email provider sent a congratulatory email. Back to one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
