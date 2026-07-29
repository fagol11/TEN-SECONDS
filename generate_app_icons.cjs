const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Pure Node.js PNG encoder
function createPng(width, height, getPixelRGBA) {
  const rowSize = width * 4 + 1;
  const buffer = Buffer.alloc(rowSize * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    buffer[rowOffset] = 0; // Filter 0 (None)
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRGBA(x, y, width, height);
      const pxOffset = rowOffset + 1 + x * 4;
      buffer[pxOffset] = r;
      buffer[pxOffset + 1] = g;
      buffer[pxOffset + 2] = b;
      buffer[pxOffset + 3] = a;
    }
  }

  const compressedData = zlib.deflateSync(buffer);

  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = (crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8));
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(8 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Zap Lightning Bolt Polygon (24x24 grid scale)
const zapPolygon = [
  [13 / 24, 3 / 24],
  [4 / 24, 14 / 24],
  [12 / 24, 14 / 24],
  [11 / 24, 21 / 24],
  [20 / 24, 10 / 24],
  [12 / 24, 10 / 24]
];

// Distance to segment helper for smooth thick stroke rendering
function distToSegment(px, py, x1, y1, x2, y2) {
  const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
}

function distToZap(px, py) {
  let minDist = Infinity;
  for (let i = 0; i < zapPolygon.length; i++) {
    const p1 = zapPolygon[i];
    const p2 = zapPolygon[(i + 1) % zapPolygon.length];
    const d = distToSegment(px, py, p1[0], p1[1], p2[0], p2[1]);
    if (d < minDist) minDist = d;
  }
  return minDist;
}

// OUTLINE STROKE ONLY (No inner fill - Lucide Zap stroke-[2.5] style!)
function isZapStroke(px, py) {
  // Distance threshold matching Lucide stroke width 2.5
  return distToZap(px, py) <= 0.042;
}

// 1. Full Icon Pixel Generator (Gradient Background + Dark Zap Outline)
function getFullIconPixel(x, y, width, height) {
  const nx = (x + 0.5) / width;
  const ny = (y + 0.5) / height;

  if (isZapStroke(nx, ny)) {
    return [9, 9, 13, 255]; // Dark stroke outline #09090d
  }

  // Linear Gradient from bottom-left (#10b981) to top-right (#06b6d4)
  const t = Math.max(0, Math.min(1, (nx + (1 - ny)) / 2.0));
  let r, g, b;
  if (t <= 0.5) {
    const f = t / 0.5;
    r = Math.round(16 + f * (20 - 16));
    g = Math.round(185 + f * (184 - 185));
    b = Math.round(129 + f * (166 - 129));
  } else {
    const f = (t - 0.5) / 0.5;
    r = Math.round(20 + f * (6 - 20));
    g = Math.round(184 + f * (182 - 184));
    b = Math.round(166 + f * (212 - 166));
  }

  return [r, g, b, 255];
}

// 2. Foreground Pixel Generator (Dark Zap Outline on Transparent background)
function getForegroundPixel(x, y, width, height) {
  const nx = (x + 0.5) / width;
  const ny = (y + 0.5) / height;

  if (isZapStroke(nx, ny)) {
    return [9, 9, 13, 255]; // Dark stroke outline #09090d
  }
  return [0, 0, 0, 0]; // Transparent
}

// 3. Background Pixel Generator (Gradient only)
function getBackgroundPixel(x, y, width, height) {
  const nx = (x + 0.5) / width;
  const ny = (y + 0.5) / height;
  const t = Math.max(0, Math.min(1, (nx + (1 - ny)) / 2.0));
  let r, g, b;
  if (t <= 0.5) {
    const f = t / 0.5;
    r = Math.round(16 + f * (20 - 16));
    g = Math.round(185 + f * (184 - 185));
    b = Math.round(129 + f * (166 - 129));
  } else {
    const f = (t - 0.5) / 0.5;
    r = Math.round(20 + f * (6 - 20));
    g = Math.round(184 + f * (182 - 184));
    b = Math.round(166 + f * (212 - 166));
  }
  return [r, g, b, 255];
}

console.log('Generating high quality app icon assets with OUTLINE ONLY lightning bolt...');

// Generate 512x512 assets
const iconBuffer = createPng(512, 512, getFullIconPixel);
const fgBuffer = createPng(512, 512, getForegroundPixel);
const bgBuffer = createPng(512, 512, getBackgroundPixel);

// Write to assets folder
const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

fs.writeFileSync(path.join(assetsDir, 'icon.png'), iconBuffer);
fs.writeFileSync(path.join(assetsDir, 'icon-only.png'), iconBuffer);
fs.writeFileSync(path.join(assetsDir, 'icon-foreground.png'), fgBuffer);

console.log('Saved assets/icon.png (512x512)');

// Generate Android res/mipmap sizes
const mipmapSizes = [
  { dir: 'mipmap-mdpi', size: 48 },
  { dir: 'mipmap-hdpi', size: 72 },
  { dir: 'mipmap-xhdpi', size: 96 },
  { dir: 'mipmap-xxhdpi', size: 144 },
  { dir: 'mipmap-xxxhdpi', size: 192 }
];

const resDir = path.join(__dirname, 'android', 'app', 'src', 'main', 'res');

for (const { dir, size } of mipmapSizes) {
  const targetFolder = path.join(resDir, dir);
  if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });

  const iconPng = createPng(size, size, getFullIconPixel);
  const fgPng = createPng(size, size, getForegroundPixel);
  const bgPng = createPng(size, size, getBackgroundPixel);

  fs.writeFileSync(path.join(targetFolder, 'ic_launcher.png'), iconPng);
  fs.writeFileSync(path.join(targetFolder, 'ic_launcher_round.png'), iconPng);
  fs.writeFileSync(path.join(targetFolder, 'ic_launcher_foreground.png'), fgPng);
  fs.writeFileSync(path.join(targetFolder, 'ic_launcher_background.png'), bgPng);

  console.log(`Generated ${dir} (${size}x${size})`);
}

console.log('ALL ICON ASSETS REGENERATED WITH OUTLINE STROKE!');
