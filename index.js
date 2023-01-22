// Weather API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2315b3caa0msha9ee49c3a491311p19cf07jsnb2e73a7b0332',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


timeNow = document.getElementById('timeNow');
dateNow = document.getElementById('dateNow');

// Update the clock every second
setInterval(() => {
    // Get the current date and time
    const now = new Date();
  
    // Format the time as a string (HH:MM:SS)
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
  
    // Update the clock element with the current time
    timeNow.innerHTML = time;
    dateNow.innerHTML = date;
}, 1000);
    

const resultWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            temp.innerHTML = response.temp;
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
            sunrise.innerHTML = response.sunrise = new Date(response.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = response.sunset = new Date(response.sunset * 1000).toLocaleTimeString();

            
        })

        .catch(err => console.error(err));
}
search.addEventListener('click', (e) => {
    e.preventDefault();
    resultWeather(city.value);
})

var pageHasLoaded = false;

window.onload = function () {
    if (!pageHasLoaded) {
        //code to execute when page loads for the first time
        resultWeather("Kolkata"); // this is the location you want to show weather on page load
        pageHasLoaded = true;
    }
};