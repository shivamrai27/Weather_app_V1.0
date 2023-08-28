const apikey = '767c8ffcf3a981f284db98dfa3e28d58';
const weatherDataEl = document.getElementById('weather-data');
const inputTextEl = document.getElementById('input_text');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityValue = inputTextEl.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json();
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `${Math.round(data.main.feels_like)}° C`,
            `${Math.round(data.main.humidity)}%`,
            `${Math.round(data.wind.speed)} m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon">`

        // weatherDataEl.querySelector('.detailes').innerHTML = details
        //     .map((detail) => `<section>${detail}</section>`)
        //     .join("")

        weatherDataEl.querySelector(".temp").textContent = `${temperature}° C`
        weatherDataEl.querySelector(".description").textContent = `${description}`
        weatherDataEl.querySelector(".feels-like").textContent = `${details[0]}`
        weatherDataEl.querySelector(".humidity").textContent = `${details[1]}`
        weatherDataEl.querySelector(".wind-speed").textContent = `${details[2]}`
        document.getElementById("weather-data").style.display = "block";
        document.getElementById("error").style.display = "none";
        console.log(data);
    } catch (error) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather-data").style.display = "none";
    }
}