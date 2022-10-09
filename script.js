
var citySearchEl = document.getElementById('cityname')
var weatherContainerEl = document.querySelector('weather')
var searchButton = document.querySelector('.btn')
var apiKey = "562ae09e8bccd88b6d91837ed2170f31"
var oldsearches = document.querySelector(".oldsearches")

// var formSubmitHandler = function (event) {
//     event.preventDefault();

// };


// DISPLAY TODAYS WEATHER
function displayWeather(wurther) {
    console.log("5")
    console.log(wurther)
    var pic = wurther.weather[0].icon
    var picz = 'http://openweathermap.org/img/wn/' + pic + '@2x.png'
    var picv = '<img src=' + picz + '></img>'

    var cwH = document.getElementById('cwH')
    cwH.textContent = wurther.name
    console.log("00", cwH.textContent)

    var cwV = document.getElementById('cwV')
    cwV.innerHTML = picv
    console.log("01", cwV)

    var cwT = document.getElementById('cwT')
    cwT.textContent = "Temperature: " + wurther.main.temp
    console.log("02", cwT)


    var cwW = document.getElementById('cwW')
    cwW.textContent = "Wind: " + wurther.wind.speed


    var HotDog = document.getElementById('HotDog')
    HotDog.textContent = "Humidity: " + wurther.main.humidity
}

// GET TODAYS WEATHER
var getWeather = function (event) {
    event.preventDefault();
    console.log("0")
    var citySearch = citySearchEl.value.trim();
    console.log(".5", citySearch)
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=standard&APPID=562ae09e8bccd88b6d91837ed2170f31';
    console.log("1", citySearch)
    fetch(apiUrl)
        .then(function (response) {
            console.log("2")
            if (response.ok) {
                console.log("3")
                response.json().then(function (data) {
                    console.log("4")
                    displayWeather(data);

                });
            } else {
                console.error('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            console.error('Unable to connect');
        });
};

// DISPLAY FORECAST
var fore = document.querySelector('.fore')

function displayForecast(wetha) {
    console.log("15")
    console.log(wetha)

    for (let i = 0; i < 5; i++) {
        console.log('16', i)
        var div = document.createElement('div')
        div.setAttribute("class", "list")

        var icon = wetha.list[i * 8].weather[0].icon

        var iconz = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
        var iconv = '<img src=' + iconz + '></img>\n '


        div.innerHTML = wetha.list[i * 8].dt_txt + iconv + "Temp:" + wetha.list[i * 8].main.temp + "\n Wind: " + wetha.list[i * 8].wind.speed + "\n Humidity: " + wetha.list[i * 8].main.humidity

        console.log("17", div.textContent)

        fore.appendChild(div)
    }
}

// GET FORECAST
var getForecast = function (event) {
    event.preventDefault();
    console.log("10")
    var citySearch = citySearchEl.value.trim();

    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch + '&units=standard&APPID=562ae09e8bccd88b6d91837ed2170f31';

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayForecast(data);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect');
        });
};

//  STORAGE
var array = []
oldsearches = localStorage.getItem("searches")
if (array === 0) {
    

}


oldsearches.textContent = localStorage.getItem('search')
 console.log(oldsearches)

localStorage.setItem("searches", array)
 function saveContent(event) {
    event.defaultPrevented

    localStorage.setItem('search', citySearchEl.value)
}

searchButton.addEventListener("click", getWeather);
searchButton.addEventListener("click", getForecast);
searchButton.addEventListener("click", saveContent);
