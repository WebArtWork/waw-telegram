const Slimbot = require('slimbot');

const Chat = require('./telegram');

module.exports = async function(waw) {
	waw.telegram = {
		add: id => {
			const bot = new Slimbot(id);

			const config = {
				id,
				bot,
				send: (chat, message) => {
					bot.sendMessage(chat, message);
				},
				delete: (chat_id, message_id) => {
					bot.deleteMessage(chat_id, message_id);
				},
				onMessage: []
			};

			bot.on('message', message => {
				for (const func of config.onMessage){
					if (typeof func === 'function') {
						func(message);
					}
				}
			});

			bot.startPolling();

			return config;
		},
		findChat: async (bot_id, chat_id) => {
			const chat = await Chat.findOne({ bot_id, chat_id });
			return chat;
		},
		findChats: async (bot_id) => {
			const chats = await Chat.find({ bot_id });
			return chats;
		},
		createChat: async (bot_id, chat_id) => {
			const chat = await Chat.create({ bot_id, chat_id });
			return chat;
		},
		deleteChat: async (bot_id, chat_id) => {
			await Chat.deleteOne({ bot_id, chat_id });
		}
	}
};
