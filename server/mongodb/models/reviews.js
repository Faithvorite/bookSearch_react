
import mongoose from 'mongoose';

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
    }
});

const ReviewModel = mongoose.model("reviews", ReviewSchema);
export default ReviewModel;