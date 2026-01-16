document.addEventListener("DOMContentLoaded", async () => {
  initMap();
  initClock();

  const sendBtn = document.getElementById("sendBtn");
  const inputEl = document.getElementById("input");
  const pingAudio = document.getElementById("pingAudio");

  // Botão enviar
  sendBtn.addEventListener("click", async () => {
    const text = inputEl.value.trim();
    if(!text) return;
    inputEl.value="";
    pingAudio.currentTime=0; pingAudio.play();

    // Marcador de teste aleatório (substituir por GPS + Supabase depois)
    const lat = (Math.random()-0.5)*140;
    const lng = (Math.random()-0.5)*360;
    const marker = createPulse(lat,lng,text);
    addCard(text, marker);
  });
});