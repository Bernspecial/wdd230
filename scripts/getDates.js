const dateOption = {
    year: "numeric"
};

document.querySelector("#year").textContent = new Date().toLocaleDateString("en-Us", dateOption);

const lastModified = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "#FFCCCC";
color.textContent = (`This site was last modified: ${lastModified}`);