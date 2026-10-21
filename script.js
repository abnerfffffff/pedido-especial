
function moverBotao() {
  const cartao = document.querySelector(".cartao");
  const botoes = document.querySelector(".botoes");

  // Limita o botão à área dos botões
  const area = botoes.getBoundingClientRect();
  const largura = nao.offsetWidth;
  const altura = nao.offsetHeight;
  const margem = 8;

  nao.style.position = "fixed";

  const minX = Math.max(margem, area.left);
  const maxX = Math.min(
    window.innerWidth - largura - margem,
    area.right - largura
  );

  const minY = Math.max(margem, area.top);
  const maxY = Math.min(
    window.innerHeight - altura - margem,
    area.bottom - altura
  );

  const x = minX + Math.random() * Math.max(0, maxX - minX);
  const y = minY + Math.random() * Math.max(0, maxY - minY);

  nao.style.left = `${x}px`;
  nao.style.top = `${y}px`;
}
