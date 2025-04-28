// Menu Hamburguer
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

// Botão Voltar ao Topo
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

// Lightbox da Galeria
function openLightbox(src, caption) {
    document.getElementById('lightbox').style.display = "flex";
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-caption').innerText = caption;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Efeito de Digitação (Typing Animation)
const texto = "Desastres ambientais não dão aviso. Esteja preparado.";
let index = 0;

function digitar() {
    if (index < texto.length) {
        document.getElementById("typing-text").innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 80);
    }
}

window.onload = digitar;
