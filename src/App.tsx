import {h} from "preact"
import {  useEffect} from "preact/hooks"
import "./app.css"
import {DomUtil, GridLayer, map, tileLayer} from 'leaflet'

export function App() {
  
    useEffect(() => {
      const myMap = map('map').setView([51.505, -0.09], 13);

      const CanvasLayer = GridLayer.extend({
        createTile: function(coord: {x:Number, y:Number}){
            // create a <canvas> element for drawing
            const tile = DomUtil.create('canvas', 'leaflet-tile');
    
            // setup tile width and height according to the options
            const size = this.getTileSize();
            tile.width = size.x;
            tile.height = size.y;
    
            // get a canvas context and draw something on it using coords.x, coords.y and coords.z
            const ctx = tile.getContext('2d');
            ctx && drawHouse(ctx);
    
            // return the tile so it can be rendered on screen
            return tile;
        }
    });

      // tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //     maxZoom: 19,
      //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      // }).addTo(myMap);

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

