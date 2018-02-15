const request = require('request');
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

module.exports = {
  byName: function(ctx, name){
    request(`${API_URL}${name}&APPID=${API_KEY}`, (err, res, body) => {
      // If there is an error.
      if(err) {
        console.error(err);
        ctx.reply(err);
      }

      // Just in case it's not a JSON.
      const parsedBody = JSON.parse(body);

      // If there is no city found or 404.
      if(parsedBody.cod === '404'){
        ctx.reply(parsedBody.message);
        return null;
      }

      // Let's take our data from the body.
      let weather = parsedBody.weather[0].main;
      let weatherDesc = parsedBody.weather[0].description;
      let city = parsedBody.name;
      let tempF = parsedBody.main.temp * (9/5) - 459.67; 
          tempF = Math.floor(tempF);

      // Emojis are very important.
      let emoji;
      switch(weatherDesc){
        case 'broken clouds':
          emoji = '⛅';
          break;

        case 'scattered clouds':
          emoji = '⛅';
          break; 

        case 'overcast clouds':
          emoji = '☁';
          break;  

        case 'light intensity drizzle':
          emoji = '🌧';
          break;  

        case 'light intensity shower rain':
          emoji = '🌧';
          break;  

        case 'moderate rain':
          emoji = '🌧';
          break;  

        case 'fog':
          emoji = '🌫';
          break;  

        // There is no 'mist' emoji, only fog.
        case 'mist':
          emoji = '🌫';
          break;  

        case 'clear sky':
          emoji = '☀'; 
          break;   

        // TODO: Replace snow with real desc
        case 'snow':
          emoji = '🌨';
          break;  

        case 'light snow':
          emoji = '🌨';
          break;    

        // TODO: Replace thunderstorm with real desc
        case 'thunderstorm':
          emoji = '🌩';
          break;  

        default:
          emoji = '☀'; 
          break; 
      }

      let response = 
        `The weather in ${city} is currently ${tempF}°F and ${emoji} ${weatherDesc}.`;
  
      ctx.reply(response);
    })
  }
}