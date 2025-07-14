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
  navLinks.style.display = "none";
  main.style.marginTop = "0";
  removeMenu.style.display = "none";
});

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

document.getElementById("currentyear").textContent = year;
let lastModify = document.getElementById("lastModify");

let temple = [
  {img: "images/temple2.webp", name: "Salt Lake Temple"},
  {img: "images/temple3.webp", name: "Manila Philippines Temple"},
  {img: "images/temple4.webp", name: "Rome Temple"},
  {img: "images/temple5.webp", name: "Tokyo Japan Temple"},
  {img: "images/temple6.webp", name: " City Center Temple"},
  {img: "images/temple7.webp", name: "Lusaka Zambia Temple"},
  {img: "images/temple8.webp", name: "Aba Temple"},
  {img: "images/temple9.webp", name: "Abidjan Ivory Coast Temple"}
]

let templeCont = document.getElementById("temple-container");

temple.forEach(t => {
  let figure = document.createElement("figure");
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  img.setAttribute("src", t.img);
  img.setAttribute("alt", t.name);
  console.log(img)
  figcaption.textContent = t.name;
  
  figure.append(img, figcaption)

  templeCont.appendChild(figure);
});

setInterval(() => {
  lastModify.textContent = `Last Modification: ${day}/${month}/${year}, ${Date().slice(
    16,
    24
  )}`;
});
