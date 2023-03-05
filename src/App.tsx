import {h} from "preact"
import {useEffect} from "preact/hooks"
import "./app.css"
import {DomUtil, GridLayer, map, tileLayer} from "leaflet"

import {
  spriteSize,
  imageLoadPromise,
  image,
  sprite,
  spriteFor,
} from "./spritemap"
import {drawHouse} from "./drawHouse"

const SpriteLayer = GridLayer.extend({
  createTile: function (
    coords: {x: number; y: number},
    done: (error: any, tile: any) => unknown,
  ) {
    const tile = DomUtil.create("canvas", "leaflet-tile")
    const {x: width, y: height} = this.getTileSize()
    Object.assign(tile, {width, height})

    const ctx = tile.getContext("2d")

    imageLoadPromise.then(() => {
      const drawArgs = [
        image,
        ...sprite[spriteFor(coords)],
        spriteSize,
        spriteSize,
        0,
        0,
        width,
        height,
      ]
      // @ts-ignore
      ctx && ctx.drawImage(...drawArgs)
      ctx && drawHouse(ctx)
      done(null, tile)
    })
    return tile
  },
})

export function App() {
  useEffect(() => {
    const myMap = map("map").setView([0, 0], 10)
    // @ts-ignore
    new SpriteLayer({
      tileSize: 32,
      keepBuffer: 16,
      updateWhenIdle: true,
      attribution:
        '<a href="https://helicity.itch.io/lobit-overworld">Helicity\'s LoBit Overworld</a>',
    }).addTo(myMap)
  }, [])

  return <div id="map"></div>
}

test("App", {
  true() {
    expect(true, equals, true)
  },
})
