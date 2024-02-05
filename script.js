function getWeather() {
    var cityName = document.getElementById('cityInput').value;
    var apiKey = '80d6fe6c8560fc59bdff30c646e3cb32'; // Replace with your API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var weatherData = JSON.parse(xhr.responseText);
            displayWeather(weatherData);
        } else {
            handleError('Error fetching weather data');
        }
    };
    xhr.send();
}

function displayWeather(data) {
    var resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = `
        <p>Location: ${data.name}, ${data.sys.country}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function handleError(message) {
    var resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = `<p>${message}</p>`;
}
