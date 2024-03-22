const mongoose = require('mongoose');
const { Schema } = mongoose;

//import { Schema, model } from "mongoose";

const ChatSchema = new Schema({
  nick: String,
  msg: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);
//export default model("Chat", ChatSchema);