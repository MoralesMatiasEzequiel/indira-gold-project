require('dotenv').config();
const mongoose = require('mongoose');
const { URI_MONGODB, MONGO_URL } = process.env;

// const mongoUrl = MONGO_URL || URI_MONGODB;

const connection = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
        // await mongoose.connect(URI_MONGODB, {
        
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('DB listen');
    } catch (err) {
        console.error('Error al conectar a MongoDB. ERROR:', err);
    }
}

module.exports = connection;



//OPC 2:
// const connection = async () => {
//     try {
//         await mongoose.connect(URI_MONGODB);
//         console.log('DB listen');
//     } catch (err) {
//         console.error('Error al conectar a MongoDB. ERROR: ', err);
//     }
// };


//OPC 1:
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