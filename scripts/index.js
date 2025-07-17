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
