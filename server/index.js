const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tchurchill24:WCqBkTgH-YLL9C$@cluster0.1uhdrti.mongodb.net/mernTutorial?retryWrites=true&w=majority")

app.listen(3001, () => {
    console.log("SERVER RUNS")
})


