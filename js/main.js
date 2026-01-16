document.addEventListener("DOMContentLoaded", async () => {
  initMap();
  initClock();

  const sendBtn = document.getElementById("sendBtn");
  const inputEl = document.getElementById("input");
  const pingAudio = document.getElementById("pingAudio");

  // Carrega mensagens existentes
  const existing = await fetchMessages();
  existing.forEach(m=>{
    const marker = createPulse(m.latitude, m.longitude, m.text);
    addCard(m.text, marker);
  });

  // Inscrição em tempo real
  subscribeMessages(m=>{
    const marker = createPulse(m.latitude, m.longitude, m.text);
    addCard(m.text, marker);
    pingAudio.currentTime=0; pingAudio.play();
  });

  // Enviar nova mensagem
  sendBtn.addEventListener("click", async ()=>{
    if(!navigator.geolocation) return alert("GPS não disponível");
    const text = inputEl.value.trim();
    if(!text) return;
    inputEl.value="";
    
    // Geolocalização do usuário
    navigator.geolocation.getCurrentPosition(async pos=>{
      const lat = pos.coords.latitude + (Math.random()-0.5)*0.02;
      const lng = pos.coords.longitude + (Math.random()-0.5)*0.02;

      const {data,error} = await supabaseClient.from('messages').insert([{text, latitude:lat, longitude:lng}]);
      if(error) console.error(error);
    });
  });
});