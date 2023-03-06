import { SpriteSheet } from "./spritemap";
import lobitOverworld from "./lobit-overworld.png"

export const image = new Image()
export const imageLoadPromise = new Promise((resolve) => {
  image.addEventListener("load", resolve)
})
image.src = lobitOverworld

const spriteSize = 16;
export const coordsByName: Record<string, [number, number]> = {
  blue: [0, 11],
  red: [1, 11],
  green: [2, 11],
  light: [3, 11],
};

export const sheet = SpriteSheet(image, spriteSize, coordsByName);

await new Promise((resolve) =>
  image.addEventListener("load", resolve),
)
