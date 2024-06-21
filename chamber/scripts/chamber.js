const dateOption = {
    year: "numeric"
};

document.querySelector("#year").textContent = new Date().toLocaleDateString("en-Us", dateOption);

// This code is to show when last the site was updated
const lastModifie = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "#0E1208";
color.textContent = (`This site was last modified: ${lastModifie}`);

// This code is create a hambugger for the mobile view
const menu = document.querySelector("#menu");
const links = document.querySelector("nav");

menu.addEventListener("click", () => {
    links.classList.toggle("open");
    menu.classList.toggle("open");
});