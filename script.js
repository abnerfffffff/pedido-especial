const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

function moverBotao() {
  const margem = 12;

  nao.style.position = "fixed";

  const maxX = Math.max(margem, window.innerWidth - nao.offsetWidth - margem);

  const maxY = Math.max(margem, window.innerHeight - nao.offsetHeight - margem);

  const x = margem + Math.random() * Math.max(0, maxX - margem);
  const y = margem + Math.random() * Math.max(0, maxY - margem);

  nao.style.left = `${x}px`;
  nao.style.top = `${y}px`;
}

nao.addEventListener("pointerenter", (evento) => {
  if (evento.pointerType === "mouse") {
    moverBotao();
  }
});

nao.addEventListener("click", moverBotao);

sim.addEventListener("click", () => {
  mensagem.hidden = false;
  nao.hidden = true;

  sim.textContent = "SIM! 💖";
  sim.disabled = true;

  sim.setAttribute("aria-label", "Sim, aceito! ❤️");

  mensagem.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
