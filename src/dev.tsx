import {render, Fragment, h} from "preact"
import {useEffect, useRef} from "preact/hooks"
import {DrawArgs} from "./CanvasContext"

import {image, SpriteSheet, spriteSize} from "./spritemap"

await new Promise((resolve) =>
  image.addEventListener("load", resolve),
)

const coordsByName: Record<string, [number, number]> = {
  blue: [0, 11],
  red: [1, 11],
  green: [2, 11],
  light: [3, 11],
}

const sheet = SpriteSheet(image, spriteSize, coordsByName)

function App() {

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

render(<App />, document.getElementById("app")!)