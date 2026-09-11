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

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressedData),
    makeChunk('IEND', Buffer.alloc(0))
  ]);
}

// Background Color: Exact emerald / mint green from user's image (#00b87c / #00c284)
const BG_R = 0;
const BG_G = 188;
const BG_B = 130;

// Dark Shape Color: (#03543f)
const SHAPE_R = 2;
const SHAPE_G = 78;
const SHAPE_B = 58;
const OPACITY = 0.55; // semi-transparent overlay just like reference image

function isInsideOne(nx, ny) {
  // Bounding box for numeral "1"
  // Top beak: from x=0.15 to 0.25, y=0.40 slanting up to x=0.25, y=0.26
  // Main stem: from x=0.23 to 0.42, y=0.26 to y=0.75

  // Main vertical stem
  if (nx >= 0.23 && nx <= 0.42 && ny >= 0.26 && ny <= 0.75) {
    return true;
  }

  // Top triangular beak (left flag of "1")
  if (nx >= 0.15 && nx <= 0.23 && ny >= 0.26 && ny <= 0.41) {
    // Sloped edge: from (0.15, 0.41) to (0.25, 0.26)
    const slope = (0.26 - 0.41) / (0.25 - 0.15);
    const lineY = 0.41 + slope * (nx - 0.15);
    if (ny >= lineY && ny <= 0.41) {
      return true;
    }
  }

  return false;
}

function isInsideZero(nx, ny) {
  // "0" is a circle at center (0.58, 0.505) with radius 0.265
  const cx = 0.58;
  const cy = 0.505;
  const radius = 0.265;

  const dx = nx - cx;
  const dy = ny - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist > radius) return false;

  // Pie slice cut out from angle: ~ -30 deg to +30 deg (facing rightwards)
  // angle in radians:
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  // Cutout is between -28 degrees and +32 degrees
  if (angle >= -28 && angle <= 32) {
    return false; // Wedge is cut out!
  }

  return true;
}

function getPixel(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;

  const inOne = isInsideOne(nx, ny);
  const inZero = isInsideZero(nx, ny);

  let r = BG_R;
  let g = BG_G;
  let b = BG_B;
  let a = 255;

  let shapeCount = (inOne ? 1 : 0) + (inZero ? 1 : 0);

  if (shapeCount === 1) {
    // Single layer overlap
    r = Math.round(BG_R * (1 - OPACITY) + SHAPE_R * OPACITY);
    g = Math.round(BG_G * (1 - OPACITY) + SHAPE_G * OPACITY);
    b = Math.round(BG_B * (1 - OPACITY) + SHAPE_B * OPACITY);
  } else if (shapeCount === 2) {
    // Double layer overlap (the intersection between 1 and 0) -> darker!
    const doubleOpacity = 1 - Math.pow(1 - OPACITY, 2); // ~0.80
    r = Math.round(BG_R * (1 - doubleOpacity) + SHAPE_R * doubleOpacity);
    g = Math.round(BG_G * (1 - doubleOpacity) + SHAPE_G * doubleOpacity);
    b = Math.round(BG_B * (1 - doubleOpacity) + SHAPE_B * doubleOpacity);
  }

  return [r, g, b, a];
}

const size = 1024;
const pngBuf = createPng(size, size, getPixel);
fs.writeFileSync(path.join(__dirname, 'store_assets', 'exact_user_icon_10.png'), pngBuf);
fs.writeFileSync(path.join('C:', 'Users', 'fabri', '.gemini', 'antigravity-ide', 'brain', 'b267b0b1-6d77-4920-ae13-77a032739746', 'exact_user_icon_10.png'), pngBuf);
console.log('Successfully generated exact_user_icon_10.png');
