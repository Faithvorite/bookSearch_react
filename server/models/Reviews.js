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
    data: {
        type: String,
        required: true,
    },
    // timestamp: {
    //     type: Timestamp,
    //     required: true,
    // }
});

const ReviewModel = mongoose.model("reviews", ReviewSchema);
module.exports = ReviewModel;