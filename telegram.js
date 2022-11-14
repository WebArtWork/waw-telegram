const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	chat_id: String,
	bot_id: String,
	data: {}
});

module.exports = mongoose.model('TelegramChat', Schema);
