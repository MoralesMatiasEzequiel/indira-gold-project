require('dotenv').config();
const mongoose = require('mongoose');
const { URI_MONGODB } = process.env;

const connection = async () => {
    try {
        await mongoose.connect(URI_MONGODB);
        console.log('DB listen');
    } catch (err) {
        console.error('Error al conectar a MongoDB. ERROR: ', err);
    }
}

module.exports = connection;


// require('dotenv').config();
// const mongoose = require('mongoose');
// const { URI_MONGODB } = process.env;


// const connection = async () => {
//     await mongoose.connect(URI_MONGODB,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
//     console.log('DB listen');
// }

// module.exports = connection;