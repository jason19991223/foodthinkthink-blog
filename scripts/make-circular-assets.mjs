import sharp from "sharp";

const source =
  "C:/Users/User/Desktop/超大黑洞/食事求識/IG封面/IMG_20260315_195237_324.webp";

function circleMask(size) {
  return Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${
      size / 2
    }" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
  );
}

async function makeCircle(output, size, format) {
  const image = sharp(source)
    .resize(size, size, { fit: "cover" })
    .ensureAlpha()
    .composite([{ input: circleMask(size), blend: "dest-in" }]);

  if (format === "webp") {
    await image.webp({ quality: 92 }).toFile(output);
    return;
  }

  await image.png().toFile(output);
}

async function makeOpenGraphImage() {
  const circleSize = 630;
  const circle = await sharp(source)
    .resize(circleSize, circleSize, { fit: "cover" })
    .ensureAlpha()
    .composite([{ input: circleMask(circleSize), blend: "dest-in" }])
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([{ input: circle, left: 285, top: 0 }])
    .webp({ quality: 92 })
    .toFile("public/og-image.webp");
}

async function main() {
  await makeCircle("public/site-cover.webp", 1440, "webp");
  await makeCircle("public/site-icon.png", 512, "png");
  await makeCircle("src/app/icon.png", 32, "png");
  await makeCircle("src/app/apple-icon.png", 180, "png");
  await makeOpenGraphImage();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
