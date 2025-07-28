const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    size: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    size: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    size: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    size: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    size: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    size: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1986, December, 2",
    size: 1166442,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Cobán Guatemala",
    location: "Cobán Guatemal",
    dedicated: "2024, June, 9",
    size: 8772,
    imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake city, Utah",
    dedicated: "1893, April, 24",
    size: 253015,
    imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
];

let main = document.querySelector("main");
let templeCont = document.createElement("div");

templeCont.id = "temple-cont";
main.appendChild(templeCont);

function displayTemples(templesArray) {
  templeCont.innerHTML = "";

  templesArray.forEach((temple) => {
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let size = document.createElement("p");

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("loading", "lazy")
    h3.textContent = temple.templeName;
    location.innerHTML = `<span>Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span>Dedication:</span> ${temple.dedicated}`;
    size.innerHTML = `<span>Size:</span> ${temple.size}`;

    figcaption.append(h3, location, dedication, size);
    figure.append(img, figcaption);

    templeCont.appendChild(figure);
  });
}

displayTemples(temples);

let homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let allTemples = temples.filter((temple) => {
    return temple;
  });

  displayTemples(allTemples);
});

let oldBtn = document.getElementById("old");
oldBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let oldTemples = temples.filter((temple) => {
    return parseInt(temple.dedicated.split(",")[0]) < 1900;
  });
  displayTemples(oldTemples);
});

let newBtn = document.getElementById("new");
newBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let newTemples = temples.filter((temple) => {
    return parseInt(temple.dedicated.split(",")[0]) > 2000;
  });

  displayTemples(newTemples);
});

let largeBtn = document.getElementById("large");
largeBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let largeTemples = temples.filter((temple) => {
    return parseInt(temple.size) > 90000;
  });

  displayTemples(largeTemples);
});

let smallBtn = document.getElementById("small");
smallBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let smallTemples = temples.filter((temple) => {
    return parseInt(temple.size) < 10000;
  });

  displayTemples(smallTemples);
});

let menuIcon = document.getElementById("menu-icon");
let navBar = document.getElementById("nav-bar");
let removeMenu = document.getElementById("remove-menu");

menuIcon.addEventListener("click", () => {
  navBar.style.display = "flex";
  main.style.marginTop = "300px";
  removeMenu.style.display = "block";
});

removeMenu.addEventListener("click", () => {
  navBar.style.display = "";
  main.style.marginTop = "";
  removeMenu.style.display = "";
});

let date = new Date();
let year = date.getFullYear().toString().padStart(2, 0);
let day = date.getDate().toString().padStart(2, 0);
let month = date.getMonth().toString().padStart(2, 0);

document.getElementById("year").textContent = year;

setInterval(() => {
  document.getElementById(
    "last-modified"
  ).textContent = `Last Modification: ${month}/${day}/${year}, ${Date().slice(
    16,
    24
  )}`
});
