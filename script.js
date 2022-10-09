
var citySearchEl = document.getElementById('cityname')
var weatherContainerEl = document.querySelector('weather')
var searchButton = document.querySelector('.btn')
var apiKey = "562ae09e8bccd88b6d91837ed2170f31"

var Tacoma;

var formSubmitHandler = function (event) {
    event.preventDefault();

    // if (citySearch) {
    //     getCity(citySearch);

    //     weatherContainerEl.textContent = '';
    //     citySearchEl.value = '';
    // } else {
    //     alert('Please try again, no city found');
    // }
};
// GET CITY LAT AND LON
// var getCity = function (city) {
//     var apiGeo = 'http://api.openweathermap.org/geo/1.0/direct?q=' + { city name }, { state code }, { country code }+ '&limit=3&appid=562ae09e8bccd88b6d91837ed2170f31';
// }
// https://api.openweathermap.org/data/2.5/weather?lat=47,252876&lon=-122,444290&APPID=562ae09e8bccd88b6d91837ed2170f31
function displayWeather(wurther) {
    console.log("5")
    console.log(wurther)

    var cwH = document.getElementById('cwH')
    cwH.textContent = wurther.name
    console.log("00", cwH.textContent)

    var cwV = document.getElementById('cwV')
    cwV.textContent = wurther.weather[0].main
    console.log("01", cwV)

    var cwT = document.getElementById('cwT')
    cwT.textContent = "Temperature: " + wurther.main.temp
    console.log("02", cwT)


    var cwW = document.getElementById('cwW')
    cwW.textContent = "Wind: " + wurther.wind.speed


    var HotDog = document.getElementById('HotDog')
    HotDog.textContent = "Humidity: " + wurther.main.humidity

}
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
                    // localStorage.set("city", newCity)
                });
            } else {
                console.error('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            console.error('Unable to connect');
        });
};
var fore = document.querySelector('.fore')

function displayForecast(wetha) {
    console.log("15")
    console.log(wetha)

    for (let i = 0; i < 5; i++) {
        console.log('16', i)
        var div = document.createElement('div')

        div.textContent = wetha.list[i].dt + wetha.list[i].weather[0].main +
        
console.log("17")
        li.textContent = "Temp: " + wetha.main.temp

        li.textContent = "Wind: " + wetha.wind.speed

        li.textContent = "Humidity: " + wetha.main.humidity
        fore.appendChild(div)
    }

   
}
// }

var getForecast = function (event) {
    event.preventDefault();
    console.log("10")
    var citySearch = citySearchEl.value.trim();

    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch + '&units=standard&cnt=5&APPID=562ae09e8bccd88b6d91837ed2170f31';

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

searchButton.addEventListener("click", getWeather);
searchButton.addEventListener("click", getForecast);
