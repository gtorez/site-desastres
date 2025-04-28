// MENU HAMBÚRGUER
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// BOTÃO VOLTAR AO TOPO
let btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// LIGHTBOX PARA AS IMAGENS DA GALERIA
function openLightbox(src, caption) {
    document.getElementById('lightbox').style.display = "flex";
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').innerText = caption;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL
const texto = "Desastres ambientais não dão aviso. Esteja preparado.";
let index = 0;

function digitar() {
    if (index < texto.length) {
        document.getElementById("typing-text").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 80);
    }
}

// Só iniciar a digitação na página inicial (se existir o elemento)
window.onload = function() {
    const typingText = document.getElementById("typing-text");
    if (typingText) {
        digitar();
    }
}
