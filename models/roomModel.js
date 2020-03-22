const mongoose = require("../database");
const schema = {
    id: { type: mongoose.SchemaTypes.Number, required: true },
    name: { type: mongoose.SchemaTypes.String, required: true },
    roomId: { type: mongoose.SchemaTypes.Number, required: true }
};
const collectionName = "rooms"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
const Room = mongoose.model(collectionName, userSchema);
module.exports = Room;