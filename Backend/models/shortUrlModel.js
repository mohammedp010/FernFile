import mongoose from "mongoose";
import shortId from "shortid";

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

// module.exports = mongoose.model('shortUrl', shortUrlSchema);

const shortUrl = mongoose.model('shortUrls', shortUrlSchema);

export default shortUrl;