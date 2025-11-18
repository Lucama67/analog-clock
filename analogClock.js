/* 
   Author: Luca Maag
   Beschreibung: Analoge Uhr,
   Datum von änderung: 18.11.2025
*/

// Zeiger aus dem HTML auswählen
const secondHand = document.querySelector('.second-hand'); // Sekundenzeiger
const minuteHand = document.querySelector('.min-hand');    // Minutenzeiger
const hourHand   = document.querySelector('.hour-hand');   // Stundenzeiger

// Funktion: Uhrzeit holen und Zeiger bewegen
function setClock() {
  const now = new Date();  // aktuelle Uhrzeit vom Computer

  // Sekunden (Millisekunden)
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;

  // Anteil der Sekunden
  const minutes = now.getMinutes() + seconds / 60;

  // Anteil der Minuten
  const hours = now.getHours() + minutes / 60;

  // Winkel berechnen und -90° korrigieren,

  // Sekundenzeiger
  const secondsDeg = (seconds / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  // Minutenzeiger
  const minutesDeg = (minutes / 60) * 360 - 90;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  // Stundenzeiger
  const hoursDeg = (hours / 12) * 360 - 90;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Uhr laufend aktualisieren (20x pro Sekunde)
setInterval(setClock, 50);
// Uhr sofort beim Start setzen
setClock();
