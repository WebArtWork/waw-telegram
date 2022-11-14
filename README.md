# waw-telegram
simple code as below enable deleting new and left member from chat
```
const bot = waw.telegram.add('YOUR_TELEGRAM_BOT_TOKEN');
bot.onMessage.push(async message => {
  if (
    message.new_chat_member ||
    message.left_chat_member
  ) {
    bot.delete(message.chat.id, message.message_id);
  }
});
```
