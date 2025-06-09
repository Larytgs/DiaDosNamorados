// Lista de músicas disponíveis
const musicas = [
    {
        elemento: document.getElementById('musica'),
        nome: "Hungria - Atmosfera"
    },
    {
        elemento: document.getElementById('musica2'),
        nome: "Caio luccas - Close friends"
    },
    {
        elemento: document.getElementById('musica3'),
        nome: "Grupo Revelação - Essência Da Paixão"
    }
];

let indiceAtual = 0;
let isPlaying = false;

const playButton = document.getElementById('playButton');

function pararMusicas() {
    musicas.forEach(musica => {
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

playButton.addEventListener('click', () => {
    if (isPlaying) {
        pararMusicas();
        playButton.textContent = '🎶 Reproduzir Música 🎶';
        isPlaying = false;
    } else {
        tocarProximaMusica();
        playButton.textContent = '🎶 Pausar Música 🎶';
        isPlaying = true;
    }
});

// Quando uma música terminar, tocar a próxima
musicas.forEach(musica => {
    if (musica.elemento) {
        musica.elemento.addEventListener('ended', () => {
            tocarProximaMusica();
        });
    }
}); 