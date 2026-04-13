// ===== DARK MODE TOGGLE =====
function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// ===== LOAD SAVED THEME =====
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

// ===== RUN WHEN PAGE LOADS =====
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
});