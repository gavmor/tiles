import { h } from "preact"
import { useEffect } from "preact/hooks"
import "./app.css"
import { DomUtil, GridLayer, map, tileLayer } from "leaflet"

import quadSrc from "./quad.png"

const quad = new Image()
const imageLoadPromise = new Promise((resolve) => {
  quad.addEventListener("load", resolve)
})
quad.src = quadSrc

const CanvasLayer = GridLayer.extend({
  createTile: function (
    coords: { x: number; y: number },
    done: (error: any, tile: any) => unknown,
  ) {
    const tile = DomUtil.create("canvas", "leaflet-tile")
    const { x: width, y: height } = this.getTileSize()
    Object.assign(tile, { width, height })

    const ctx = tile.getContext("2d")

    imageLoadPromise.then(() => {
      const sprite = {
        blue: [0, 0],
        yellow: [quad.width / 2, 0],
      }
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
      const drawArgs = [
        quad,
        ...sprite[spriteFor(coords)],
        quad.width / 2,
        quad.height / 2,
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

function spriteFor(coords: { x: number; y: number }) {
  return coords.y % 2
    ? coords.x % 2
      ? "blue"
      : "yellow"
    : coords.x % 2
      ? "yellow"
      : "blue"
}

export function App() {
  useEffect(() => {
    const myMap = map("map").setView([0, 0], 10)
    new CanvasLayer().addTo(myMap)
  }, [])

  return <div id="map"></div>
}

test("App", {
  true() {
    expect(true, equals, true)
  },
})

function drawHouse(ctx: CanvasRenderingContext2D) {
  ctx.lineWidth = 10

  ctx.strokeRect(75, 140, 150, 110) // wall
  ctx.fillRect(130, 190, 40, 60) // Door

  ctx.beginPath() // Roof
  ctx.moveTo(50, 140)
  ctx.lineTo(150, 60)
  ctx.lineTo(250, 140)
  ctx.closePath()
  ctx.stroke()
}
