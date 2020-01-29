const mongoose = require('mongoose');

const thoughtSchema = mongoose.Schema({
    text : {
        type: String,
        require: true
    },
    title : {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Thought', thoughtSchema)