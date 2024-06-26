const lastModified = document.lastModified;
color = document.querySelector("#lastModified");
color.style.color = "black";
color.textContent = (`This site was last modified: ${lastModified}`);