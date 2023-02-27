import {h} from "preact"
import {  useEffect} from "preact/hooks"
import "./app.css"
import {DomUtil, GridLayer, map, tileLayer} from 'leaflet'

import quadSrc from './quad.png'
function quadPNG() {
  const image = new Image()
  image.src = quadSrc
  return image
}

const CanvasLayer = GridLayer.extend({
  createTile: function(coord: {x:Number, y:Number}){
      // create a <canvas> element for drawing
      const tile = DomUtil.create('canvas', 'leaflet-tile');

      // setup tile width and height according to the options
      const size = this.getTileSize();
      tile.width = size.x;
      tile.height = size.y;
    
      const ctx = tile.getContext('2d');
      ctx && ctx.drawImage(quadPNG(), 0, 0)
      ctx && drawHouse(ctx);

      // return the tile so it can be rendered on screen
      return tile;
  }
});



export function App() {
      useEffect(() => {
      const myMap = map('map').setView([0, 0], 10);
      new CanvasLayer().addTo(myMap)
    }, []);

  return <div id="map"></div>
}

test("App", {
  "true"() {
    expect(true, equals, true)
  },
})

function drawHouse(ctx: CanvasRenderingContext2D) {
  ctx.lineWidth = 10;

  // Wall
  ctx.strokeRect(75, 140, 150, 110);

  // Door
  ctx.fillRect(130, 190, 40, 60);

  // Roof
  ctx.beginPath();
  ctx.moveTo(50, 140);
  ctx.lineTo(150, 60);
  ctx.lineTo(250, 140);
  ctx.closePath();
  ctx.stroke();
}

