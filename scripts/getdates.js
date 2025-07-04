const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastMod = new Date(document.lastModified);

const formatted = lastMod.toLocaleString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

document.getElementById("last-modified").textContent =
  "Last Modification : " + formatted;
