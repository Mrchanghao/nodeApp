const request = require('request');
const argv  = require('yargs').argv;
const apiKey = '8ae0c117deaddff3fb97dcd9e79a7940'
const city = argv.c || 'Seoul'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

console.log(argv.c);
request(url, (err, response, body)=> {
  
  if(err) {
    console.log('error: ', err);
  } else {
    let weather = JSON.parse(body);
    // console.log('body: ', body);
    // console.log(weather);
let temperature = Math.ceil(weather.main.temp - 273.15);
    let message = `${temperature}도 ${weather.name}!`
    console.log(message);
  }
});