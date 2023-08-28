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
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metrics`)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json();

    } catch (error) {

    }
}