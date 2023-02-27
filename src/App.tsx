import {h} from "preact"
import {  useEffect} from "preact/hooks"
import "./app.css"
import {map, tileLayer} from 'leaflet'

export function App() {
  
    useEffect(() => {
      const myMap = map('map').setView([51.505, -0.09], 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(myMap);

    }, []);

  return <div id="map"></div>
}

test("App", {
  "true"() {
    expect(true, equals, true)
  },
})
