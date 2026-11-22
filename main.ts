import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// This nighttime still life begins after the library has closed its doors.
// The books rest against one another, so no single book must stand alone.
// Their shared weight gives the room a plain sense of containment.
// Darkness removes the need to inspect titles, solve problems, or keep pace.
// Nothing here tries to impress the reader or ask them for an answer.
// The quiet process is simple: settle, lean, remain, and let the room be still.
// Plain words draw a gentle boundary around the image and leave room to breathe.
// A reader may borrow that steadiness while the books hold their places.
// The scene relaxes by offering company without noise and order without force.

const message = 'The library is closed. The books lean on each other in the dark, holding their places without being read.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), message, 'utf8');
