// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/___________';
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=94f353dd107e08ba472857158ebbaf93"

async function apiFecth() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
            // console.log(data.weather);
            // console.log(`Current Temperature: ${data.main.temp}°F`);
            // console.log(`Weather Description: ${data.weather[0].description}`);
            // console.log(`Image Icon Reference: ${data.weather[0].icon}`);
        }
        else {
            throw new Error(`HTTP error! status: ${response.status}`);

        }


    }

    catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }

apiFecth();