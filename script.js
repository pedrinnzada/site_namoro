// Fotos do casal
const fotos = [
  "fotos/foto1.jpg",
  "fotos/foto2.jpg",
  "fotos/foto3.jpg",
  "fotos/foto4.jpg",
  "fotos/foto5.jpg",
  "fotos/foto6.jpg",
  "fotos/foto7.jpg",
  "fotos/foto8.jpg",
  "fotos/foto9.jpg",
  "fotos/foto10.jpg"
];
let index = 0;

// Troca foto a cada 3 segundos
setInterval(() => {
  index = (index + 1) % fotos.length;
  document.getElementById("foto").src = fotos[index];
}, 3000);

// Contador de namoro
const inicio = new Date("2022-07-30T00:00:00"); // <- Muda para a data de vocês

function atualizaTempo() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("contador").textContent =
    `Estou ${dias} dias, ${horas}h ${minutos}m ${segundos}s com você 💞`;
}

setInterval(atualizaTempo, 1000);
atualizaTempo();

// musica
const music = document.getElementById("music");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const tempoAtual = document.getElementById("tempoAtual");
const duracaoTotal = document.getElementById("duracao");

let isPlaying = false;

// Função formatar tempo
function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

// Atualiza a barrinha e tempo
music.addEventListener("timeupdate", () => {
  progress.value = (music.currentTime / music.duration) * 100;
  tempoAtual.textContent = formatarTempo(music.currentTime);
  duracaoTotal.textContent = formatarTempo(music.duration);
});

// Mover a bolinha
progress.addEventListener("input", () => {
  music.currentTime = (progress.value / 100) * music.duration;
});

// Play/pause manual
playPause.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    playPause.textContent = "▶️";
  } else {
    music.play();
    playPause.textContent = "❚❚";
  }
  isPlaying = !isPlaying;
});




// corações
const heartsContainer = document.querySelector(".hearts-container");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(criarCoracao, 500);


const telaInicial = document.getElementById("tela-inicial");
const botaoClick = document.getElementById("botaoClick");
const conteudo = document.getElementById("conteudo");

botaoClick.addEventListener("click", () => {
  telaInicial.style.display = "none";
  conteudo.style.display = "block";
  music.play(); // começa a música quando entra
  isPlaying = true;
  playPause.innerHTML = "❚❚";
});
