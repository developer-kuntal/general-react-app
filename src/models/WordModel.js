const mongoose = require('mongoose');
const shortid = require("shortid");

const wordSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    english_word: {
        type: String,
        required: [true, 'Please add a word'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    bengali_meanings: {
        type: String,
        required: true,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    images:{ type: String }, // { type: String },
    timestamp:{ 
        type: Date, 
        required: true,
        default: Date.now 
    },
    
})

module.exports = mongoose.model("Word", wordSchema);

// mongoose.models.Word ||