import { render, Fragment, h } from "preact"
import { useEffect, useRef } from "preact/hooks"

import quad from "./quad.png"

const image = new Image()
image.src = quad
const spriteSize = 360

await new Promise(resolve => image.addEventListener("load", resolve))

render(<App />, document.getElementById("app")!)

function App() {
    const coordsByName: Record<string, [number, number]> = {
        "blue": [0, 0],
        "red": [0, 360],
        "yellow": [360, 0],
        "green": [360, 360],
    }
    return <>
        {
            Object.entries(coordsByName).map(([name, coords]) =>
                <span>{name}<SpriteCanvas args={spriteAt(...coords)} /></span>)
        }
    </>
}

type DrawArgs = [
    sheet: HTMLImageElement,
    srcX: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
    dstX: number,
    dstY: number,
    dstWidth: number,
    dstHeight: number,
]

function spriteAt(x: number, y: number): DrawArgs {
    return [image, x, y, spriteSize, spriteSize, 0, 0, 32, 32]
}

function SpriteCanvas(props: { args: DrawArgs }) {
    const canvasRef = useRef<null | HTMLCanvasElement>(null)
    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d")
        ctx && ctx.drawImage(...props.args)
    }, [])
    return <canvas width="32" height="32" ref={canvasRef}></canvas>
}