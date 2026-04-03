export function hashSeed(rawSeed: string) {
  const hash = Array.from(rawSeed)
    .reduce((prev, _, i) => Math.imul(31, prev) + rawSeed.charCodeAt(i) | 0, 0);

  return Math.abs(hash);
}

export function generateSeed() {
  const code = Math.floor(Math.random() * 2 ** 32);
  return `BLINK-${code}`;
}

export function dailySeed() {
  const today = new Date().toISOString().slice(0, 10);
  return `BLINK-${today}`;
}

export function mulberry32(seed: number) {
  return function () {
    seed |= 0
    seed = seed + 0x6d2b79f5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}
