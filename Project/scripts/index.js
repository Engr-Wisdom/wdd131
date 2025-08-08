let boxes = [
  {img: "https://elilaw179.github.io/wdd131/project/images/ban.webp", name: "Banff National Park", description: "Explore the Canadian Rockies with stunning trails and lakes."},
  {img: "https://elilaw179.github.io/wdd131/project/images/appli.webp", name: "Banff National Park", description: "Trek the legendary 2,000-mile Appalachian Trail from Georgia to Maine."},
  {img: "https://elilaw179.github.io/wdd131/project/images/tor.webp", name: "Banff National Park", description: "Iconic Patagonian landscapes with dramatic peaks."},
];

let boxCont = document.getElementById("box-cont");

if (boxCont) {
  boxes.forEach(box => {
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `<img src="${box.img}" alt="${box.name}" loading="lazy">
    <figcaption>
      <h3>${box.name}</h3>
      <p>${box.description}</p>
      <p class="hiking">Hiking</p>
    </figcaption>`;
    boxCont.appendChild(div);
  });
}

function toggleNavBar() {
  let menuIcon = document.getElementById("menu-icon");
  let ul = document.querySelector("ul");
  let removeBtn = document.getElementById("remove-menu");

  if (menuIcon && ul && removeBtn) {
    menuIcon.addEventListener("click", () => {
      ul.classList.toggle("show");
    });

    removeBtn.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
  }
}

toggleNavBar();

let DisplayYear = document.getElementById("year");
DisplayYear.textContent = new Date().getFullYear();

let lastMod = document.getElementById("last-mod");
setInterval(() => {
  let currentDate = new Date();
  let month = String(currentDate.getMonth()).padStart(2, 0);
  let date = String(currentDate.getDate()).padStart(2, 0);
  let year = String(currentDate.getFullYear()).padStart(2, 0);
  let hour = String(currentDate.getHours()).padStart(2, 0);
  let minute = String(currentDate.getMinutes()).padStart(2, 0);
  let second = String(currentDate.getSeconds()).padStart(2, 0);

  lastMod.textContent = `Last Modification: ${month}/${date}/${year}, ${hour}:${minute}:${second}`;
});