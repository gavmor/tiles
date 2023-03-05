export type DrawSrc = [
  sheet: HTMLImageElement,
  srcX: number,
  srcY: number,
  srcWidth: number,
  srcHeight: number,
]
export type DrawDest = [
  dstX: number,
  dstY: number,
  dstWidth: number,
  dstHeight: number,
]
export type DrawArgs = [...DrawSrc, ...DrawDest]
