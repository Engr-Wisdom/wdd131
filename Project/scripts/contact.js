let btn = document.querySelector("button");
let inputs = [
  {name: document.getElementById("name"), errorTxt: document.getElementById("name-error")},
  {name: document.getElementById("email"), errorTxt: document.getElementById("email-error")},
  {name: document.getElementById("message"), errorTxt: document.getElementById("msg-error")},
];
let submitTxt = document.getElementById("submit-txt");

inputs.forEach((input) => {
  input.name.addEventListener("input", () => {
    input.errorTxt.style.display = "none";
    completeForm();
  });
});

function completeForm() {
  let complete = inputs.every((input) => input.name.value !== "");
  if (complete) {
    btn.classList.add("active");
  }
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let error = false;

  inputs.forEach((input) => {
    if (input.name.value === "") {
      input.errorTxt.style.display = "block";
      error = true;
    } else {
      input.errorTxt.style.display = "none";
    }

    if (!error) {
      submitTxt.style.display = "block";
      input.name.value = ""
      btn.classList.remove("active");
      setTimeout(() => {
        submitTxt.style.display = "none";
      }, 5000);
    }
  });
});
