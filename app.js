const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT ? process.env.PORT: 3000

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Server failed")
    } else {
        console.log(`Launched on port ${port}`)
    }
})

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

