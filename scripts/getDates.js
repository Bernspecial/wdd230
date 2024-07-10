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


// This code is used for current weather forecast

const weatherTem = document.querySelector("#weatherTemperature");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=7.38&lon=3.94&units=imperial&appid=94f353dd107e08ba472857158ebbaf93";


async function ibadanweather(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
        }else{
            throw new Error (`HTTP error! status: ${response.status}`)
        }

    }
    catch (error){
        console.log(error)
    }
}

function displayWeather(weather){
    let img = document.createElement("img");

    weatherTem.innerHTML= `${weather.main.temp}&deg;F`;
    const theIcon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    let description = weather.weather[0].description;
    img.setAttribute("src", theIcon);
    img.setAttribute("alt", description);
    captionDesc.textContent = `${description}`;

    weatherIcon.appendChild(img)
}

ibadanweather();
