const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [
            true,
            "Comment is required!"
        ],
        minlength: [5, "Comment must contain at least 5 characters"],
        maxlength: [255, "Comment must contain max of 255 characters"]
    },
    rating: {
        type: Number,
        required: [
            true,
            "Rating is required!"
        ],
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;