const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please enter your name ']
    },
    subject:{
        type: String,
        required:[true,'Enter the subject']
    },
    email:{
        type: String,
        required:[true,'Enter your email']
    },
    phone:{
        type: String,
        required:[true,'Enter your number ']
    },
    message:{
        type: String,
        required:[true,'Please enter your message ']
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Contact', ContactSchema)