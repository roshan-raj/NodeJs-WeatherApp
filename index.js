const request = require('request'); // Request module for API Call
var reader = require('readline'); // Readline module for the user input

var req = reader.createInterface({
  input: process.stdin,
  output: process.stdout
});

req.question("Enter your City Name: ", function(answer) { 
//Taking input from user 

let apiKey = '******************************'; 
//Enter your API Key here (Replae '***'s with your API Key

let url = `http://api.openweathermap.org/data/2.5/weather?q=${answer}&units=imperial&appid=${apiKey}` 
//The URL used to make the HTTP request, '?' indicates the start of the Query. These are set of Key & Values seperated by a '='. Different Keys & Values pair are seperated by a '&'
  
req.close();

request(url, function (err, response, body) { 
// In the request package we pass in the URL and a function with three arguments

  if(err){
// Checks for an error in our request

    console.log('error:', error);
// If there is an error we log the error

  } else {
    let weather = JSON.parse(body)
// There will be unwanted quotation marks in the output, so we need to parse it to a JSON(JavaScript Object Notation) so it's easy to accces.

// Now we can access the JavaScript 'weather' object, to access the data within the object and display it. 
    let message1 = `\nCountry: ${weather.sys.country} \nCity: ${weather.name} \nTemperature: ${weather.main.temp}`;
    let message2 = `\nLocation is... \nLongitutde: ${weather.coord.lon} \nLattitude: ${weather.coord.lat}`;

    console.log(message1); 
    console.log(message2);
  }
});
});
