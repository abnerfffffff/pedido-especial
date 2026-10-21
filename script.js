
function moverBotao() {
  const margem = 12;

  nao.style.position = "fixed";

  const maxX = Math.max(
    margem,
    window.innerWidth - nao.offsetWidth - margem
  );

  const maxY = Math.max(
    margem,
    window.innerHeight - nao.offsetHeight - margem
  );

  const x = margem + Math.random() * Math.max(0, maxX - margem);
  const y = margem + Math.random() * Math.max(0, maxY - margem);

  nao.style.left = `${x}px`;
  nao.style.top = `${y}px`;
}
