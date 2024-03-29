const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    school: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
        email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
}, {
timestamps: true,
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;