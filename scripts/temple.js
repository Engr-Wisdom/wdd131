let navLinks = document.getElementById("nav-links");
let menuIcon = document.getElementById("menu-icon");
let removeMenu = document.getElementById("remove-menu");
let main = document.querySelector("main")

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

const temple = [
  { img: "images/temple2.webp", name: "Salt Lake Temple" },
  { img: "images/temple3.webp", name: "Manila Philippines Temple" },
  { img: "images/temple4.webp", name: "Rome Temple" },
  { img: "images/temple5.webp", name: "Tokyo Japan Temple" },
  { img: "images/temple6.webp", name: "Provo City Center Temple" },
  { img: "images/temple7.webp", name: "Lusaka Zambia Temple" },
  { img: "images/temple8.webp", name: "Aba Temple" },
  { img: "images/temple9.webp", name: "Abidjan Ivory Coast Temple" },
];

let templeContainer = document.getElementById("temple-container");

temple.forEach(t => {
  let div = document.createElement("div");
  div.className = "temple";
  let img = document.createElement("img");
  let figcaption = document.createElement("figcaption");
  img.setAttribute("src", t.img);
  img.setAttribute("alt", t.name);
  figcaption.textContent = t.name;

  div.append(img, figcaption);
  templeContainer.appendChild(div);
})

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

document.getElementById("currentyear").textContent = year;
let lastModify = document.getElementById("lastModify");

setInterval(() => {
  lastModify.textContent = `Last Modification: ${day}/${month}/${year}, ${Date().slice(16, 24)}`;
});