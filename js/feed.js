const cardsEl = document.getElementById("cards");

function addCard(message, marker=null) {
  const div = document.createElement("div");
  div.className = "card";
  const now = new Date();
  div.textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} - ${message}`;
  if(marker) div.onclick = ()=>{ marker.openPopup(); }
  cardsEl.prepend(div);
}