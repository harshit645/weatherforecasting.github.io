// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// `` means backtick symbol

const weatherApi = {
    key: "a891f29c7db4e73d9a8c7adcbfb98419",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event Listener keypress on inputbox
searchInputBox.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {  //13 represent Enter key
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display="block";
    }
});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then((response) => {
        return response.json();
    }).then(showWeatherReport);
}


//Show Weather Report
function showWeatherReport(response) {
    console.log(response);

    let city = document.getElementById('city');
    city.innerText = `${response.name}, ${response.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(response.main.temp)}&deg;C`;

    let minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(response.main.temp_min)}&deg;C (min)/ ${Math.ceil(response.main.temp_max)}&deg;C (max)`;

    let weathertype = document.getElementById('weather');
    weather.innerText = `${response.weather[0].main}`;

    let date = document.getElementById('date');
    var todaydate = new Date();
    date.innerText = dateManage(todaydate);

    if(weathertype.textContent=='Clear'){
        document.body.style.backgroundImage="url('../images/clear.jpg')";
    }

    else if(weathertype.textContent=='Clouds'){
        document.body.style.backgroundImage="url('../images/cloud.jpg')";
    }

    else if(weathertype.textContent=='Rain'){
        document.body.style.backgroundImage="url('../images/rain.jpg')";
    }

    else if(weathertype.textContent=='Sunny'){
        document.body.style.backgroundImage="url('../images/sunny.jpg')";
    }

    else if(weathertype.textContent=='Snow'){
        document.body.style.backgroundImage="url('../images/snow.jpg')";
    }

    else if(weathertype.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('../images/thunderstorm.jpg')";
    }

    else if(weathertype.textContent=='Haze'){
        document.body.style.backgroundImage="url('../images/haze.jpg')";
    }

    else{
        document.body.style.backgroundImage="url('../images/anyweather.jpg')";
    }

}

//Date Manage
function dateManage(dateArg) {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];

    let date = dateArg.getDate();

    let day = days[dateArg.getDay()];

    let month = months[dateArg.getMonth()];

    let year = dateArg.getFullYear();

    return `${date} ${month} (${day}), ${year}`;
}


