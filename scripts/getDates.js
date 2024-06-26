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

// This code is to create how many times a user visits the webpage


// Initialize display element variable
const visit = document.querySelector(".visits");

// Get the stored VALUE for the numberOfVisit KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the 
// numVisits variable.
let numbVisit = Number(window.localStorage.getItem("numberOfVisit")) || 0;

//  Determine if this is the first visit or display the number of visits. 
if (numbVisit !== 0){
    visit.textContent = numbVisit;
}
else{
    visit.textContent = `🎉Welcome! It's your first time here.`;
}

// increment the number of visits by one.
numbVisit++;

//  store the new visit total into localStorage, numberOfVisit
localStorage.setItem("numberOfVisit", numbVisit);
