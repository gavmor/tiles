import lobitOverworld from "./lobit-overworld.png";
import { makeNoise2D } from "open-simplex-noise";

export const spriteSize = 16;

export const sprite = {
  blue: [0, 0],
  yellow: [360, 0],
};
export function spriteFor(coords: { x: number; y: number; }) {
  const value = makeNoise2D(420)(coords.x, coords.y);
  return value > 0 ? "blue" : "yellow";
}

export const image = new Image();
export const imageLoadPromise = new Promise((resolve) => {
  image.addEventListener("load", resolve);
});
image.src = lobitOverworld;
