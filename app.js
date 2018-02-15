require('dotenv').config();
const owm = require('./controllers/openWeatherMap.js');
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

// Runs on start for new user.
bot.start((ctx) => {
  console.log('started:', ctx.from.id);
  return ctx.reply(`Welcome to Superb Weather Bot! 
  See /help for usage. Source: Open Weather Map https://openweathermap.org/`);
})

// Input: City Name Output: Weather in that city.
bot.hears(/city/i, ctx => {
  // Remove '/city' from the city name string before sending.
  let city = ctx.update.message.text.slice(6, ctx.update.message.text.length);
  owm.byName(ctx, city);
});

// Help command.
bot.command('help', (ctx) => ctx.reply('Usage: /city San Diego'));

// Be polite.
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears('thanks', (ctx) => ctx.reply(`You're welcome.`))

bot.startPolling()