// Product List

const products = [
  {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
  {id: "fc-2050", name: "power laces", averagerating: 4.7},
  {id: "fs-1987", name: "time circuits", averagerating: 3.5},
  {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
  {id: "jj-1969", name: "warp equalizer", averagerating: 5.0}
];

let selectProduct = document.getElementById("select-product");

if (selectProduct) {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;

    selectProduct.appendChild(option)
  });
}

// Rating

let stars = document.querySelectorAll(".star");
let radios = document.querySelectorAll("input[type='radio']");

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    for (let i = 0; i < stars.length; i++) {
      stars[i].style.color = "gray";
    }

    for (let i = 0; i <= index; i++) {
      stars[i].style.color = "gold";
    }
  });
});

// Last Modification

let lastMod = document.getElementById("last-mod");

setInterval(() => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth().toString().padStart(2, 0);
  let day = currentDate.getDate().toString().padStart(2, 0);
  let hour = currentDate.getHours().toString().padStart(2, 0);
  let minute = currentDate.getMinutes().toString().padStart(2, 0);
  let second = currentDate.getSeconds().toString().padStart(2, 0);

  document.getElementById("year").textContent = year;

  lastMod.textContent = `Last Modification ${month}/${day}/${month} ${hour}:${minute}:${second}`;
});

let count = 0;
document.addEventListener("DOMContentLoaded", () => {
  count++;
  document.getElementById("count").textContent = count
})

// ===== Handle Review Submission (form.html only) =====
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Update review count in localStorage
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
localStorage.setItem("reviewCount", count + 1);


    // Redirect to review.html
    window.location.href = "review.html";
  });
}

// ===== Display Review Count (review.html only) =====
window.addEventListener("DOMContentLoaded", () => {
  const countSpan = document.getElementById("count");
  if (countSpan) {
    const count = localStorage.getItem("reviewCount") || 0;
countSpan.textContent = count;

  }
});
