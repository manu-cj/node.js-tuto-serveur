const express = require("express")
const PORT = process.env.PORT || 8000

const app = express()

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(PORT , () => {
    console.log('serveur en ligne');
})