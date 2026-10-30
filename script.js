const pesquisa = document.getElementById("pesquisaProjetos");
const filtro = document.getElementById("filtroCategoria");
const projetos = document.querySelectorAll(".projeto");
const mensagemVazia = document.getElementById("nenhumProjeto");

function filtrarProjetos() {
    const termo = pesquisa.value.toLowerCase().trim();
    const categoria = filtro.value;

    let quantidadeVisivel = 0;

    projetos.forEach(projeto => {
        const texto = projeto.textContent.toLowerCase();
        const categoriaProjeto = projeto.dataset.categoria;

        const correspondeTexto = texto.includes(termo);
        const correspondeCategoria =
            categoria === "" || categoriaProjeto === categoria;

        const mostrar = correspondeTexto && correspondeCategoria;

        projeto.hidden = !mostrar;

        if (mostrar) {
            quantidadeVisivel++;
        }
    });

    mensagemVazia.hidden = quantidadeVisivel > 0;
}

pesquisa.addEventListener("input", filtrarProjetos);
filtro.addEventListener("change", filtrarProjetos);

// Atualizar ano automaticamente
const rodape = document.querySelector("footer p");

rodape.textContent =
    © ${new Date().getFullYear()} Gabriel Oliveira Dalmo — Portfólio Profissional;

// Animação dos cartões ao carregar
projetos.forEach((projeto, indice) => {
    projeto.style.animation = aparecer 0.5s ease ${indice * 0.08}s both;
});