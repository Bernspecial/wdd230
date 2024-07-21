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




// ------------------------------------------------------------------------------------------------------------------------------------------------
// Dynamic Weather program

const weatherTem = document.querySelector("#temperature");
const captionDesc = document.querySelector('#description');
const forecasts = document.querySelector("#threeDaysForecast");


const url = "https://api.openweathermap.org/data/2.5/weather?lat=7.38&lon=3.94&units=imperial&appid=94f353dd107e08ba472857158ebbaf93";


async function ibadanChamberWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
      // console.log(data)
    } else {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

  }
  catch (error) {
    // console.log(error)
  }
}

function displayWeather(weather) {
  weatherTem.innerHTML = `<h5>Current Weather Temperature:</h5> ${weather.main.temp}&deg;F`;
  captionDesc.innerHTML = `<h5>Current Weather Description:</h5> ${weather.weather[0].description}`;
}



ibadanChamberWeather();

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=7.38&lon=3.94&units=imperial&appid=94f353dd107e08ba472857158ebbaf93";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

async function foreCast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayThreeDayForecast(data.list);
      // console.log(data)
    } else {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

  }
  catch (error) {
    // console.log(error)
  }
}

function displayThreeDayForecast(forecast) {
  let html = '';
  for (let i = 0; i < 3; i++) { // loop through every 8th element (since the API returns 8 forecasts per day)
    const date = new Date(forecast[i * 8].dt * 1000); // convert Unix timestamp to Date object
    const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // get the day of the week
    const temp = forecast[i * 8].main.temp; // get the temperature
    html += `<h6>Day: ${day}</h6> Temperature: ${temp}°F`;
  }
  forecasts.innerHTML = `<h5>Three days weather forecasts:</h5> ${html}`;
}



foreCast();


// ----------------------------------------------------------SpotLight---------------------------------------------------------------------------------------------

// This code is used for generate spotlight for members of the chamber

const spot = document.querySelector("#spotlight");

const memberUrl = "https://bernspecial.github.io/wdd230/chamber/data/members.json";


async function memberFetch() {
  try {
    const response = await fetch(memberUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data.members);
      const member = data.members;
      const qualifiedMembers = member.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
      const spotlightMembers = getRandomMembers(qualifiedMembers, 2, 3);
      displayspotlight(spotlightMembers);
    }else {
      throw new Error(`Error: ${response.status}`);
    }
  } 

  catch (error) {
    // console.log(error)
  }
}
function getRandomMembers(members, min, max) {
  const randomCount = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomMembers = [];
  for (let i = 0; i < randomCount; i++) {
    const randomIndex = Math.floor(Math.random() * members.length);
    randomMembers.push(members[randomIndex]);
    members.splice(randomIndex, 1);
  }
  return randomMembers;
}

function displayspotlight(members) {
  members.forEach((member) => {
    const headline2 = document.createElement("div");
    const page = document.createElement("p");
    let image = document.createElement("img");

    image.setAttribute("src", member.image);
    image.setAttribute("alt", `image of ${member.name} company`);
    image.setAttribute("loading", "lazy");

    headline2.innerHTML = `<span> MemberShip level: </span> ${member.membershipLevel} <br> <span> Company Name:</span> ${member.name} ` ;
    // page.textContent = ``;

    spot.appendChild(image)
    spot.appendChild(headline2);
    // spot.appendChild(page);


  });
}

memberFetch();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

// this code is used for the banner invite

const banner = document.getElementById('banner');
const closeBanner = document.getElementById('close-banner');

// Get the current day of the week (0 = Sunday, 1 = Monday,..., 6 = Saturday)
const today = new Date().getDay();

// Show the banner only on Mondays, Tuesdays, and Wednesdays
if (today === 1 || today === 2 || today === 3) {
  banner.style.display = 'block';
}

// Add an event listener to close the banner
closeBanner?.addEventListener('click', () => {
  banner.style.display = 'none';
});