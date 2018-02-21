require('dotenv').config()
const owm = require('./controllers/openWeatherMap.js')
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

// Runs on start for new user.
bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply(`Welcome to Superb Weather Bot! 
  See /help for usage. Source: Open Weather Map https://openweathermap.org/`)
})

// Find weather by city name.
bot.hears(/city/i, ctx => {
  // Remove '/city' from the city name string before sending.
  let city = ctx.update.message.text.slice(6, ctx.update.message.text.length)
  owm.byName(ctx, city)
})

// Find weather by zip code
bot.hears(/zip/i, ctx => {
  // Remove '/city' from the city name string before sending.
  let zip_and_country = ctx.update.message.text.slice(5, ctx.update.message.text.length)
  let split = zip_and_country.split(' ')
  let zip = split[0]
  let country = split[1]

  owm.byZip(ctx, zip, country)
})

// Find weather by location.
bot.on('message', ctx => {
  if(ctx.message.location){
    owm.byLocation(ctx, ctx.message.location)
  }
})

// Help command.
bot.command('help', (ctx) => ctx.reply(`Usage: 
  /city San Diego
  /zip 92120
  /zip 100-0001 JP
  Share location on the Telegram app to get weather at your position.
  `));

// Be polite.
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.hears('thanks', (ctx) => ctx.reply(`You're welcome.`))

bot.startPolling()