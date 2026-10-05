const themeToggle = document.querySelector("#themeToggle");
const themeText = document.querySelector("#themeText");

const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
);


// Apply theme to the page
function applyTheme(theme) {

    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    themeText.textContent =
        theme === "dark" ? "Light Mode" : "Dark Mode";
}


// Get system theme
function getSystemTheme() {

    return systemTheme.matches ? "dark" : "light";
}


// Load saved theme or system theme
const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme || getSystemTheme());


// Follow system theme if user has not manually selected one
systemTheme.addEventListener("change", () => {

    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }

});


// Control by button
themeToggle.addEventListener("click", () => {

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    const newTheme = currentTheme === "dark"
        ? "light"
        : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);

});

