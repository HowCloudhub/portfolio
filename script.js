function updateThemeButton() {
  const label = document.querySelector(".theme-label");
  const icon = document.querySelector(".theme-toggle i");
  const isDark = document.body.classList.contains("dark");

  if (label) {
    label.textContent = isDark ? "Dark Mode" : "Light Mode";
  }

  if (icon) {
    icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeButton();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
  updateThemeButton();
});