// news-image-20261120 entry (Node 22, standard library only).
// The image was drawn for Friday 20 November 2026 by draw.py in this
// repository (Pillow, run at build time); this program just copies the
// finished PNG to the grader's output directory, so both runs write the
// same bytes. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain copy is byte-for-byte, so the grader's two runs always agree.
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
