import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const BOT_TOKEN = process.env.BOT_TOKEN || '';

if (BOT_TOKEN === '') {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(BOT_TOKEN)

bot.on(message('text'), async (ctx) => {
  const rex = /(?:\/|)(?:sed|s)\/.+\/.+/i;
  // check if the message matches the regex
  if (rex.test(ctx.message.text)) {
    // We've got a sed!
    
  }
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))