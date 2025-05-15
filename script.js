// MENU HAMBÚRGUER
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// BOTÃO VOLTAR AO TOPO
let btnTopo = document.getElementById("btnTopo");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// LIGHTBOX PARA A GALERIA (verifique se há lightbox.html ou galeria.html com esses IDs)
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');

    if (lightbox && img && cap) {
        lightbox.style.display = "flex";
        img.src = src;
        cap.innerText = caption;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// EFEITO DE DIGITAÇÃO NA HOME
const texto = "Desastres ambientais não dão aviso. Esteja preparado.";
let index = 0;

function digitar() {
    if (index < texto.length) {
        const typingText = document.getElementById("typing-text");
        if (typingText) {
            typingText.innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 80);
        }
    }
}

// INICIAR SÓ SE TIVER TÍTULO COM ID "typing-text"
window.onload = function () {
    const typingText = document.getElementById("typing-text");
    if (typingText) {
        digitar();
    }
};
