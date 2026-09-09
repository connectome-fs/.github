import sharp from "sharp";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const assets = join(dirname(fileURLToPath(import.meta.url)), "..");
const brand = join(assets, "brand", "neuronal-2026-09");
const sizes = [16, 32, 48, 64, 128, 256, 512];
const logo = readFileSync(join(brand, "logo.svg"));
const mark = readFileSync(join(brand, "logo-mark.svg"));
const favicon = readFileSync(join(brand, "favicon.svg"));

for (const s of sizes) {
  await sharp(logo).resize(s, s).png().toFile(join(brand, `logo-${s}.png`));
  await sharp(mark).resize(s, s).png().toFile(join(brand, `logo-mark-${s}.png`));
  console.log(`logo-${s}.png + logo-mark-${s}.png`);
}
await sharp(logo).resize(180, 180).png().toFile(join(brand, "apple-touch-icon.png"));
console.log("apple-touch-icon.png");
for (const size of [16, 32, 48]) {
  await sharp(favicon)
    .resize(size, size)
    .png()
    .toFile(join(brand, `favicon-${size}.png`));
}
await sharp(favicon).resize(32, 32).png().toFile(join(brand, "favicon.png"));
console.log("favicon PNGs");
