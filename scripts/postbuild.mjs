import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const target = join(root, ".vercel/output/static");

if (existsSync(join(target, "assets"))) {
  console.log("✓ Static assets already at .vercel/output/static/");
  process.exit(0);
}

const sources = [
  join(root, ".vercel/output/static/client"),
  join(root, "dist/client"),
  join(root, ".output/public"),
];

for (const src of sources) {
  if (existsSync(src)) {
    await mkdir(target, { recursive: true });
    await cp(src, target, { recursive: true, force: true });
    console.log(`✓ Copied static assets from ${src.replace(root, ".")} to .vercel/output/static/`);
    process.exit(0);
  }
}

console.warn("⚠ No client build assets found. Images will 404.");
