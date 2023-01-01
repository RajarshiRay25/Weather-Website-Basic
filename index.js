// Weather API

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2315b3caa0msha9ee49c3a491311p19cf07jsnb2e73a7b0332',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

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

            sunrise.innerHTML = response.sunrise = new Date(response.sunrise * 1000).toLocaleTimeString();

            sunset.innerHTML = response.sunset = new Date(response.sunset * 1000).toLocaleTimeString();
            temp.innerHTML = response.temp;
            dateNow.innerHTML = new Date().toLocaleDateString();
            wind_degrees.innerHTML = response.wind_degrees;
            wind_speed.innerHTML = response.wind_speed;
            timeNow.innerHTML = new Date().toLocaleTimeString();
        })

        .catch(err => console.error(err));
}
search.addEventListener('click', (e) => {
    e.preventDefault();
    resultWeather(city.value);
})
