const express = require("express");
const app = express();
const mongoose = require('mongoose');
const ReviewModel = require('./models/Reviews')
require("dotenv").config();

const cors = require("cors");

app.use(express.json());
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)

app.get("/getReviews", (req, res) => {
    ReviewModel.find({}, (err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

app.post("/createReview", async (req,res) => {
    const review = req.body;
    const newReview = new ReviewModel(review);
    await newReview.save();

    res.json(review);
});

app.listen(3001, () => {
    console.log("SERVER RUNS");
});