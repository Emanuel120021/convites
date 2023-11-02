AOS.init({
  // Configurações AOS // Duração da animação em milissegundos
  offset: 200, // Offset (em pixels) da animação a partir do início do elemento
});
const meuAudio = document.getElementById("meuAudio");

// Controlar o volume (0-1, onde 1 é o volume máximo)
meuAudio.volume = 0.6;
