const express = require("express")
const app = express()
const io = require("socket.io")(3000)
const mongoose = require("./database")
const User = require("./models/userModel")


io.on('connection', (socket) => {
    socket.emit('kage', { hello: 'world' });
})

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT ? process.env.PORT: 80

const serverPort = app.listen(port, (error) => {
    if (error) {
        console.log("Server failed")
    } else {
        console.log(`Launched on port ${port}`)
    }
})

/**
 * PAGES
 */

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

app.get("/rooms", (req, res) => {
    return res.sendFile(__dirname + "/public/rooms.html")
})

app.get("/room", (req, res) => {
    User.create({
        name: "test2",
        email: "tes2fgaeaet",
        password: "test"
    });
    return res.sendFile(__dirname + "/public/chatroom.html")
})


/**
 * API
 */

app.get('/api/rooms', (req, res) => {
    res.send([{ name: "room1" }]);
});