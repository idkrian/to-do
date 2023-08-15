const mongoose = require('../db/conn')
const {Schema} = mongoose

const Task = mongoose.model('Task', new Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    done: {
        type: Boolean
    }
}, {timestamps: true}))

module.exports = Task