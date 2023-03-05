import {render, Fragment, h} from "preact"
import {useEffect, useRef} from "preact/hooks"
import {DrawArgs} from "./CanvasContext"

import quad from "./quad.png"
import {SpriteSheet} from "./spritemap"

const image = new Image()
image.src = quad
const spriteSize = 360

await new Promise((resolve) =>
  image.addEventListener("load", resolve),
)

render(<App />, document.getElementById("app")!)

function App() {
  const coordsByName: Record<string, [number, number]> = {
    blue: [0, 0],
    red: [0, 1],
    yellow: [1, 0],
    green: [1, 1],
  }

  const sheet = SpriteSheet(image, 360, coordsByName)

  return (
    <>
      {Object.keys(coordsByName).map((name) => (
        <span>
          {name}
          <SpriteCanvas
            args={[...sheet.spriteFor(name), 0, 0, 32, 32]}
          />
        </span>
      ))}
    </>
  )
}

function SpriteCanvas(props: {args: DrawArgs}) {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    ctx && ctx.drawImage(...props.args)
  }, [])
  return <canvas width="32" height="32" ref={canvasRef}></canvas>
}
