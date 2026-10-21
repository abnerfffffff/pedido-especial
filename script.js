document.addEventListener("DOMContentLoaded", () => {
  const botaoSim = document.getElementById("sim");
  const botaoNao = document.getElementById("nao");
  const botoes = document.querySelector(".botoes");
  const mensagem = document.getElementById("mensagem");

  if (!botaoSim || !botaoNao || !botoes || !mensagem) return;

  // Ao tocar/clicar em SIM, mostra a mensagem especial.
  botaoSim.addEventListener("click", () => {
    mensagem.hidden = false;
    botoes.hidden = true;
    mensagem.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Faz o NÃO escapar, sem sair dos limites da tela no celular.
  function moverBotao() {
    const area = botoes.getBoundingClientRect();
    const largura = botaoNao.offsetWidth;
    const altura = botaoNao.offsetHeight;
    const margem = 8;

    const minX = Math.max(margem, area.left);
    const maxX = Math.max(minX, Math.min(
      window.innerWidth - largura - margem,
      area.right - largura
    ));
    const minY = Math.max(margem, area.top);
    const maxY = Math.max(minY, Math.min(
      window.innerHeight - altura - margem,
      area.bottom - altura
    ));

    botaoNao.style.position = "fixed";
    botaoNao.style.left = `${minX + Math.random() * (maxX - minX)}px`;
    botaoNao.style.top = `${minY + Math.random() * (maxY - minY)}px`;
    botaoNao.style.zIndex = "10";
  }

  botaoNao.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") moverBotao();
  });

  botaoNao.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moverBotao();
  }, { passive: false });

  // Também funciona se a pessoa conseguir tocar/clicar no botão.
  botaoNao.addEventListener("click", (event) => {
    event.preventDefault();
    moverBotao();
  });
});
