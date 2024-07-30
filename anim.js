// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres una magnifica mujer", time: 15 },
  { text: "Tienes una asombrosa sonrisa", time: 18 },
  { text: "Tienes una mirada que le da animos a cualquiera", time: 27 },
  { text: "No puedo dejar de pensar en ti", time: 32 },
  { text: "Tu sonrisa ilumina mi día", time: 33 },
  { text: "Eres mi sol en días nublados", time: 41 },
  { text: "Eres la luz que guía mi caminos", time: 47 },
  { text: "Gracias por existir en mi vida", time: 54 },
  { text: "Tu risa es contagiosa", time: 59 },
  { text: "Me inspiras", time: 67 },
  { text: "Me siento en paz contigo", time: 72 },
  { text: "Tu bondad me conmueve", time: 78 },
  { text: "Tu manera de ver la vida es inspiradora.", time: 83 },
  { text: "Me gusta cómo eres genuina", time: 91 },
  { text: "Tu forma de pensar me encanta", time: 97 },
  { text: "Me encanta escucharte hablar.", time: 104 },
  { text: "Eres un ejemplo de fortaleza", time: 108 },
  { text: "La vida es mejor con tu energía positiva", time: 144 },
  { text: "No hay reto que no puedas enfrentar", time: 148 },
  { text: "Tu carisma hace que todos se sientan bienvenidos", time: 153 },
  { text: "Tu positividad transforma todo a tu alrededor", time: 158 },
  { text: "Eres una guerrera en todos los aspectos", time: 164 },
  { text: "Eres un faro de esperanza para mucho", time: 169 },
  { text: "Tu fortaleza me asombra cada día", time: 176 },
  { text: "Tu optimismo es una bendición", time: 183 },
  { text: "Tu energía y entusiasmo son contagiosos", time: 188 },
  { text: "Tu actitud positiva cambia vidas", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);