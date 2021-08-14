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
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1544264747-d8af8eb09999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=758&q=80')";
    }

    else if(weathertype.textContent=='Clouds'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')";
    }

    else if(weathertype.textContent=='Rain'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80')";
    }

    else if(weathertype.textContent=='Sunny'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80')";
    }

    else if(weathertype.textContent=='Snow'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1583325958573-3c89e40551ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80')";
    }

    else if(weathertype.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1574781481375-74a09eba71e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
    }

    else if(weathertype.textContent=='Haze'){
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1594492215832-a299f28a00c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
    }

    else{
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
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


