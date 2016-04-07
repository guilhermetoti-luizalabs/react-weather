import axios from 'axios';

var baseUrl = 'http://api.openweathermap.org/data/2.5/';
var apiKey = '36c9cff08067785b0160ced5ff52bae1';

export function getForecast(city) {
    var url = `${baseUrl}forecast/daily/?q=${city}&type=accurate&appid=${apiKey}&cnt=5`;

    return axios.get(url)
    .then(function (returnData) {
        return returnData.data.list;
    });
}
