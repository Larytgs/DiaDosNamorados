// Lista de músicas disponíveis
const musicas = [
  {
    elemento: document.getElementById("musica1"),
    nome: "Bruno Mars - It Will Rain",
  },
  {
    elemento: document.getElementById("musica2"),
    nome: "Pedro Capó, Farruko - Calma",
  },
  {
    elemento: document.getElementById("musica3"),
    nome: "Bruno Mars - Just the Way You Are",
  },
];

let indiceAtual = 0;
let isPlaying = false;

const playButton = document.getElementById("playButton");

function pararMusicas() {
  musicas.forEach((musica) => {
    if (musica.elemento) {
      musica.elemento.pause();
      musica.elemento.currentTime = 0;
    }
  });
}

function tocarProximaMusica() {
  pararMusicas();
  const musicaAtual = musicas[indiceAtual];
  if (musicaAtual && musicaAtual.elemento) {
    musicaAtual.elemento.play();
    // Atualiza o índice para a próxima música
    indiceAtual = (indiceAtual + 1) % musicas.length;
  }
}

playButton.addEventListener("click", () => {
  if (isPlaying) {
    pararMusicas();
    playButton.textContent = "🎶 Reproduzir Música 🎶";
    isPlaying = false;
  } else {
    tocarProximaMusica();
    playButton.textContent = "🎶 Pausar Música 🎶";
    isPlaying = true;
  }
});

// Quando uma música terminar, tocar a próxima
musicas.forEach((musica) => {
  if (musica.elemento) {
    musica.elemento.addEventListener("ended", () => {
      tocarProximaMusica();
    });
  }
});

// Contagem
function calculateTimePassed() {
  // Data inicial (30/11/2015 21:48:00 para atingir 9 anos, 6 meses, 11 dias em 11/06/2025 21:48:00)
  const startDate = new Date("2016-05-15T21:48:00-03:00");
  const now = new Date();

  // Calcula a diferença em milissegundos
  const diffMs = now - startDate;

  // Calcula anos, meses, dias, horas, minutos e segundos
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Ajustes para valores negativos
  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }
  if (days < 0) {
    months -= 1;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Atualiza o texto no HTML
  document.getElementById("time-display").textContent =
    `${years} anos, ${months} meses, ${days} dias, ` +
    `${hours.toString().padStart(2, "0")} horas, ` +
    `${minutes.toString().padStart(2, "0")} minutos e ` +
    `${seconds.toString().padStart(2, "0")} segundos`;
}

// Calcula imediatamente e atualiza a cada segundo
calculateTimePassed();
setInterval(calculateTimePassed, 1000);
