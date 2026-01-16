let map;
let markers = [];

function initMap() {
  map = L.map('map').setView([20,0],2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; OpenStreetMap contributors',
    maxZoom:19
  }).addTo(map);
}

// Cria marcador pulsante
function createPulse(lat, lng, text) {
  const marker = L.circleMarker([lat,lng],{
    radius:8, fillColor:'#4d79ff', fillOpacity:0.8, stroke:true, color:"#fff", weight:1
  }).addTo(map).bindPopup(text);
  markers.push(marker);
  return marker;
}
