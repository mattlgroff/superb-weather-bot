# Superb Weather Bot
[Demo Bot](https://t.me/superb_weather_bot) - Not running all the time because of cost.

## Installation
```
git clone
npm install
```

Provide these API Key(s) and Token(s) to your environment. I used the 'dotenv' npm package.
* [Open Weather Map API](http://openweathermap.org/appid)
* [Telegram Bot API](https://core.telegram.org/bots/api)
```
OPEN_WEATHER_MAP_API_KEY=<api key goes here>
BOT_TOKEN=<token goes here>
```
and now we can run the bot.
```
npm start
```
## Bot Usage
### Help:
```
/help
```

### Find weather by city name:
```
/city San Diego
```

### Find weather by zip code:
```
// Zip code following by the country code, if you want the weather outside the US.
/zip 90210
/zip 100-0001 JP
```

### Find weather by location:
```
On the Telegram app, click the paperclip and select 'Location' to receive the weather where your location is.
```

![Screenshot](https://i.imgur.com/biAIDNS.jpg)
