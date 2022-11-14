module.exports = function(waw) {
	// delete common messages
	if (waw.config.telegram) {
		const bot = waw.telegram.add(waw.config.telegram);

		bot.onMessage.push(async message => {
			if (
				message.new_chat_member ||
				message.left_chat_member
			) {
				bot.delete(message.chat.id, message.message_id);
			}
		});
	}
};
