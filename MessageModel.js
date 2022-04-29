const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
    message: String
});

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;