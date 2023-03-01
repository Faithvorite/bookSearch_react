const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true,
    },
    // likes: {
    //     type: Number,
    //     required: false

    // }
    // timestamp: {
    //     type: Date,
    //     default: Date.now,
    //     required: true,
    // }
});

const ReviewModel = mongoose.model("reviews", ReviewSchema);
module.exports = ReviewModel;