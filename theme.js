// Light/dark switch: follows the system setting until the visitor picks one.
const button = document.getElementById("theme");
const root = document.documentElement;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function current() {
  return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function label() {
  button.textContent = current() === "dark" ? "Light theme" : "Dark theme";
}

button.addEventListener("click", () => {
  root.dataset.theme = current() === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  label();
});

systemDark.addEventListener("change", label);
label();
