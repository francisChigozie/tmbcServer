const mongoose = require('mongoose')

const ContributorSchema = new mongoose.Schema({
    preference:{
        type: Number,
        required:[true,'Please enter the position']
    },
    name:{
        type: String,
        required:[true,'Enter the subject']
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

module.exports = mongoose.model('Contributor', ContributorSchema)