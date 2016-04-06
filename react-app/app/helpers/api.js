var axios = require('axios');

var baseUrl = 'http://api.openweathermap.org/data/2.5/';
var apiKey = '36c9cff08067785b0160ced5ff52bae1';


var forecastData = (data) => ({
    city: data.city.name,
    state: data.city.country,
    list: data.list
});


function getForecast(city) {
    var url = `${baseUrl}forecast?q=${city}&mode=json&appid=${apiKey}&cnt=5`;

    return axios.get(url)
    .then(function (returnData) {
        return forecastData(returnData.data);
    });
}


module.exports = { getForecast: getForecast };
