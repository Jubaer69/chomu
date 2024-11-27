import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    cover: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {timestamp: true})

const postmodel = mongoose.model('posts', postSchema)
export default postmodel