function initClock() {
  const timeEl = document.getElementById("time");
  function updateTime(){ 
    const d = new Date(); 
    timeEl.textContent = String(d.getHours()).padStart(2,'0')+":"+String(d.getMinutes()).padStart(2,'0'); 
  }
  updateTime();
  setInterval(updateTime,1000);
}