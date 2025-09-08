document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".background-symbols");
  if (!container) return;

  const glyphs = ["$", "€", "₿"];
  const total = 40; 

  for (let i = 0; i < total; i++) {
    const el = document.createElement("div");
    el.className = "symbol";
    el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];


    const left = Math.random() * 100; 
    const top = Math.random() * 100;  
    const size = Math.floor(18 + Math.random() * 72); 
    const opacity = 0.03 + Math.random() * 0.12;
    const duration = 12 + Math.random() * 24; 
    const delay = -Math.random() * duration; 

    el.style.left = left + "vw";
    el.style.top = top + "vh";
    el.style.fontSize = size + "px";
    el.style.opacity = opacity;
    el.style.animationDuration = duration + "s";
    el.style.animationDelay = delay + "s";
    el.style.transform = `translateY(0) rotate(${Math.floor(Math.random()*60-30)}deg)`;

    container.appendChild(el);
  }
});
