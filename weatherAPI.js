const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://visual-crossing-weather.p.rapidapi.com/history',
  params: {
    startDateTime: '2019-01-01T00:00:00',
    aggregateHours: '24',
    location: 'Washington,DC,USA',
    endDateTime: '2019-01-03T00:00:00',
    unitGroup: 'us',
    dayStartTime: '8:00:00',
    contentType: 'csv',
    dayEndTime: '17:00:00',
    shortColumnNames: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'd6bbfe9275msh819ebe32eaba934p110aa3jsn9566034352ca',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
