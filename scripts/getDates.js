// This is a code on how to get the year only.
const dateOption = {
    year: "numeric"
};

document.querySelector("#year").textContent = new Date().toLocaleDateString("en-Us", dateOption);

// This code is to show when last the site was updated
const lastModified = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "#FFCCCC";
color.textContent = (`This site was last modified: ${lastModified}`);

// This code is create a hambugger for the mobile view
const menu = document.querySelector("#menu");
const links = document.querySelector("nav");

menu.addEventListener("click", () => {
    links.classList.toggle("open");
    menu.classList.toggle("open");
});

// This code is to create a dark Mode with if statement

// const modeButton = document.querySelector("#darkMode");
// const header = document.querySelector("header");
// const classHeader = document.querySelector(".header")
// const span = document.querySelector("span")

// modeButton.addEventListener("click", () => {
//     if (modeButton.textContent.toggle("🕶")) {
//         header.style.background = "black";
//         classHeader.style.background = "black";
//         span.style.color = "white";
//         modeButton.textContent = "☀";
//     }

//     else {
//         header.style.background = "#53311D";
//         classHeader.style.background = "#53311D";
//         span.style.color = "#CCD5AE";
//         modeButton.textContent = "🕶";
//     }
// });




// Another way to write dark mode code using toggle
const darkMode = document.querySelector("#darkMode");
const header = document.querySelector("header");
const classHeader = document.querySelector(".header")
const span = document.querySelector("span")

darkMode.addEventListener("click", () => {
    header.classList.toggle("darkMode");
    classHeader.classList.toggle("darkMode");
    span.classList.toggle("darkMode");
    darkMode.classList.toggle("darkMode");
});