document.addEventListener("DOMContentLoaded", () => {
  async function carregarHTML(url, elementoId) {
    try {
      const resposta = await fetch(url);
      if (!resposta.ok) throw new Error(`Erro ao carregar ${url}: ${resposta.status}`);
      const texto = await resposta.text();
      document.getElementById(elementoId).innerHTML = texto;
    } catch (erro) {
      console.error(erro);
    }
  }

  carregarHTML('/static/components/header.html', 'site-header');
  carregarHTML('/static/components/footer.html', 'site-footer');

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});