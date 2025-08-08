const apiKey = '1589621805984feb1bafb4e561420961';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const mainInput = document.querySelector('.input-values');
const mainButton = document.querySelector('button');
const weatherCondition = document.querySelector('.weather-icon');
const weatherDisplay = document.querySelector('.weather');
const erorrMsg = document.querySelector('.erorr');
const cityName = document.querySelector('.city');
async function cheackWeather(city) {
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        erorrMsg.style.display = 'block';
    weatherDisplay.style.display = "none"; 
    } else {

        const data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    cityName.innerHTML = data.name;
    document.querySelector('.humiditys').innerHTML = data.main.humidity + '%';
    document.querySelector('.winds').innerHTML = data.wind.speed + 'km/h';
    
    if (data.weather[0].main === "Rain") {
        weatherCondition.src = "images/rain.png"; 
    } else if (data.weather[0].main === "Clear") {
        weatherCondition.src = "images/clear.png"; 
    } else if (data.weather[0].main === "Drizzle") {
        weatherCondition.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Snow") {
        weatherCondition.src = "images/snow.png";
        
    } else if (data.weather[0].main === "Clouds") {
        weatherCondition.src = "images/clouds.png";
    } else {
        weatherCondition.src = "images/mist.png";
    };
    };
    
};

mainButton.addEventListener('click', () => {
    cheackWeather(mainInput.value);
    weatherDisplay.style.display = "block"; 
        erorrMsg.style.display = 'none';
});

mainInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        mainButton.click();
    }
});