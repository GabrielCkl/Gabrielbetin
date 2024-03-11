const playerElement = document.getElementById("player");

// Crie um novo player do YouTube
const player = new YT.Player(playerElement, {
    videoId: "NDjS2ayi9Tg", // ID do vídeo do YouTube
    height: "700", // Ajuste a altura do vídeo
    width: "800", // Ajuste a largura do vídeo
    playerVars: {
        autoplay: 0, // Comece o vídeo automaticamente? (0 = não, 1 = sim)
        controls: 1, // Mostrar controles do player? (0 = não, 1 = sim)
    },
});

function abrirVideo() {
    const video = document.querySelector(".video video");
    video.requestFullscreen();
}

const botaoVideo = document.querySelector(".informacoes .botao");
botaoVideo.addEventListener("click", abrirVideo);

function mostrarNavegacao() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }
}

window.addEventListener("scroll", mostrarNavegacao);

function scrollSuave(secao) {
    const target = document.querySelector(secao);
    target.scrollIntoView({
        behavior: "smooth",
    });
}