const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Faith:Hhff57@cluster0.n2sba.mongodb.net/?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {

})
app.listen(3001, () => {
    console.log("SERVER RUNS");
});