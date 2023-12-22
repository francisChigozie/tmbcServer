const mongoose = require('mongoose')

const EditorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Enter your name']
    },
    text: {
        type: String,
        required:[true,'Enter your detail information']
        },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Editor', EditorSchema)