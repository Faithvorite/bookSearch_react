
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import ReviewModel from './mongodb/models/reviews.js';
import connectDB from './mongodb/connect.js'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

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


const startServer = async () => {
    try {
      connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();