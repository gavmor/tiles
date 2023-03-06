import {makeNoise2D} from "open-simplex-noise"
import type {DrawSrc} from "./CanvasContext"

export const spriteSize = 16

export const sprite = {
  blue: [0, 0],
  yellow: [360, 0],
}
export function spriteFor(coords: {x: number; y: number}) {
  const value = makeNoise2D(420)(coords.x, coords.y)
  return value > 0 ? "blue" : "yellow"
}


type SpriteMap = Record<string, [number, number]>

export function SpriteSheet<Map extends SpriteMap>(
  image: HTMLImageElement,
  spriteSize: number,
  spriteMap: Map,
) {
  return {
    spriteFor: (name: keyof Map): DrawSrc => [
      image,
      spriteSize * spriteMap[name][0],
      spriteSize * spriteMap[name][1],
      spriteSize,
      spriteSize,
    ],
  }
}

;() => {
  const s = SpriteSheet("image dummy" as any, 16, {foo: [0, 0]})
  // @ts-expect-error
  s.spriteFor("bar")
}

test("SpriteSheet", {
  "with one sprite at the origin"() {
    const imageDummy: any = "image-dummy"
    expect(
      SpriteSheet(imageDummy, 16, {foo: [0, 0]}).spriteFor("foo"),
      equals,
      [imageDummy, 0, 0, 16, 16],
    )
  },

  "with at least one sprite not at the origin"() {
    const imageDummy: any = "image-dummy"
    expect(
      SpriteSheet(imageDummy, 16, {foo: [2, 4]}).spriteFor("foo"),
      equals,
      [imageDummy, 32, 64, 16, 16],
    )
  },
})
