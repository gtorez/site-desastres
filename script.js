// Alterna o menu quando clicar no ícone ☰
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

// Mostra ou esconde o botão "Voltar ao topo" conforme rolagem
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Função ao clicar no botão: rola para o topo suavemente
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
