let currentYear = document.getElementById("year");
let lastModified = document.getElementById("modified");

let date = new Date();
let year = date.getFullYear().toString().padStart(2, 0);
let day = date.getDate().toString().padStart(2, 0);
let month = date.getMonth().toString().padStart(2, 0);

currentYear.textContent = year;

setInterval(() => {
  lastModified.textContent = `Last Modification: ${month}/${day}/${year}, ${Date().slice(
    16,
    24
  )}`;
});

const temperature = 10;
const windSpeed = 5

function calculateWindChill(T, V) {
  return (13.12 + (0.6215 * T) - (11.35 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16))).toFixed(1);
}

let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
  windChill =  calculateWindChill(temperature, windSpeed)
}

else {
  windChill =  N/A
}

console.log(`Wind Chill: ${windChill}`)