# Superb Weather Bot
![Screenshot](https://i.imgur.com/biAIDNS.jpg)

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
Find weather by city name:
```
/city San Diego
/city Anchorage
/city Tokyo
```

Help:
```
/help
```

