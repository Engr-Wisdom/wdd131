let currentYear = document.getElementById("year");
let lastModified = document.getElementById("modified");

let date = new Date();
let year = date.getFullYear().toString().padStart(2, 0);
let day = date.getDate().toString().padStart(2, 0);
let month = date.getMonth().toString().padStart(2, 0);

function calculateWindChill(T, V) {
  let windChill = 35.74 + (0.6215 * T) - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16)
  return windChill.toFixed(1)
}

console.log(calculateWindChill(10, 5));
currentYear.textContent = year;

setInterval(() => {
  lastModified.textContent = `Last Modification: ${month}/${day}/${year}, ${Date().slice(
    16,
    24
  )}`;
});
