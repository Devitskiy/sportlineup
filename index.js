const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const { Telegraf } = require('telegraf');

const bot = new Telegraf('7277567974:AAGKLsI0I4xeDrIijiDBaH0obTjwjGuB_h0');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Эндпоинт для проверки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




bot.command('signup', (ctx) => {
  ctx.reply('Откройте мини-приложение для записи!', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Записаться на игру', web_app: { url: 'https://your-app.vercel.app/' } }]],
    },
  });
});

bot.launch();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
