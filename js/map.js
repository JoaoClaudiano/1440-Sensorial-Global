let map;
let markers = [];

// Inicializa mapa
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

  // Pulso animado
  let r = 8;
  const interval = setInterval(()=>{
    r += 0.3;
    marker.setRadius(r);
    marker.setStyle({fillOpacity: Math.max(0,0.8 - (r-8)/20)});
    if(r >= 25) r = 8;
  },50);

  markers.push(marker);
  return marker;
}