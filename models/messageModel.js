const mongoose = require("../database");
const schema = {
    text: { type: mongoose.SchemaTypes.String, required: true },
    senderId: { type: mongoose.SchemaTypes.Number, required: true },
    roomId: { type: mongoose.SchemaTypes.Number, required: true }
};
const collectionName = "messages"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
const Message = mongoose.model(collectionName, userSchema);
module.exports = Message;