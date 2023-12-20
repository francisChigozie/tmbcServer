const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`MongoBD Connected: ${conn.connection.host}`)
}

mongoose.set('strictQuery', true)


module.exports = connectDB