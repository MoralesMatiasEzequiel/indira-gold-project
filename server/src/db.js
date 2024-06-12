require('dotenv').config();
const mongoose = require('mongoose');
const { URI_MONGODB } = process.env;


const connection = async () => {
    await mongoose.connect(URI_MONGODB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('DB listen');
}

module.exports = connection;