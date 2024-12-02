const { Telegraf } = require('telegraf');

const bot = new Telegraf('7277567974:AAGKLsI0I4xeDrIijiDBaH0obTjwjGuB_h0');

bot.command('signup', (ctx) => {
  ctx.reply('Откройте мини-приложение для записи!', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Записаться на игру', web_app: { url: 'https://your-app.vercel.app/' } }]],
    },
  });
});

bot.launch();
