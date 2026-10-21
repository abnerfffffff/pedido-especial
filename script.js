
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

function moverBotao() {
  const margem = 12;

  // Limita o movimento à área visível da tela
  const maxX = window.innerWidth - nao.offsetWidth - margem;
  const maxY = window.innerHeight - nao.offsetHeight - margem;

  const x = margem + Math.random() * Math.max(0, maxX - margem);
  const y = margem + Math.random() * Math.max(0, maxY - margem);

  nao.style.position = "fixed";
  nao.style.left = `${x}px`;
  nao.style.top = `${y}px`;
  nao.style.zIndex = "1000";
}

// No computador, foge quando o mouse chega perto
nao.addEventListener("pointerenter", (evento) => {
  if (evento.pointerType === "mouse") {
    moverBotao();
  }
});

// No celular, foge quando tocam nele
nao.addEventListener("click", moverBotao);

sim.addEventListener("click", () => {
  mensagem.hidden = false;
  nao.hidden = true;
  sim.textContent = "SIM! 💖";
  sim.disabled = true;

  mensagem.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
});
