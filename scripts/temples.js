let navLinks = document.getElementById("nav-links");
let menuIcon = document.getElementById("menu-icon");
let removeMenu = document.getElementById("remove-menu");
let main = document.querySelector("main");

menuIcon.addEventListener("click", () => {
  navLinks.style.display = "flex";
  main.style.marginTop = "250px";
  removeMenu.style.display = "block";
});

removeMenu.addEventListener("click", () => {
  navLinks.style.display = "";
  main.style.marginTop = "0";
  removeMenu.style.display = "none";
});

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

document.getElementById("currentyear").textContent = year;
let lastModify = document.getElementById("lastModify");

setInterval(() => {
  lastModify.textContent = `Last Modification: ${day}/${month}/${year}, ${Date().slice(
    16,
    24
  )}`;
});
