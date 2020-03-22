const mongoose = require("mongoose")

const dbPath = "mongodb+srv://admin:nickogthomas@nodejs-chatserver-eejku.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("open", () => {
    console.log("IT WORKS!")
})

module.exports = mongoose;