//Multer es una biblioteca de middleware para manejar la carga de archivos en Node.js
const multer = require('multer');
const path = require('path');


//Configuración de Multer:
const storage = multer.diskStorage({
    destination: (req, file, cb) => { //En 'destination' le indicamos el destino en dónde se guardarán las imágenes.
        cb(null, 'uploads/'); // Especifica el directorio de subida (donde se guardarán las imagenes subidas).
    },
    filename: (req, file, cb) => { //Con 'filename' me permite colocarle un nombre a todas las imágenes que suba. 
        // const ext = file.originalname.split('.').pop() //Ej: de 'image.png' --> me quedo con 'png'.
        cb(null, `${Date.now()}-${file.originalname}`); //Esta callback hace lo siguiente: con 'null' decimos que no reporte ningún error, el segundo parámetro se encarga de asignarlo un nombre al archivo, en este caso le asignamos como nombre la fecha y con 'file.originalname' le asignamos el nombre original al archivo. 
    }
});

const upload = multer({ 
    storage,
    limits: {
        fileSize: 50 * 1024 * 1024, // Aumenta el tamaño máximo del archivo si es necesario
        fieldSize: 100 * 1024 * 1024, // Ajusta el tamaño máximo del campo
        fields: 10, // Ajusta el número máximo de campos no relacionados con archivos
        files: 10 // Ajusta el número máximo de archivos que se pueden cargar
      },
    // dest: 'uploads/',
    // fileFilter: (req, file, cb) => {  //Con esta función validamos el tipo de archivo que el usuario está subiendo. En este caso validamos que sea un tipo de imagen. En 'file' se estará guardando información del archivo.
    //     console.log('Archivo recibido:', file.originalname);
    //     const filetypes = /jpeg|jpg|png|gif/; //Esta es una expresión regular en el que indicamos que el servidor puede aceptar tipos de archivos como 'jpeg', 'png', etc.
    //     const mimetype = filetypes.test(file.mimetype); //Acá voy a verificar que el tipo de archivo que estoy subiendo coincide con los tipos de archivos que acepto (filetypes). En 'file.mimetype' se almacena la información del tipo de archivo que estoy subiendo.
    //     const extname = filetypes.test(path.extname(file.originalname)); //Acá extraemos el nombre de la extension del archivo. Con el método 'path.extname' extraemos la extensión. En este caso extraemos la extension del nombre del archivo (file.originalname)
    //     if (mimetype && extname) { //Si el tipo de archivo (mimetype) y la extension del archivo (extname) son válidos entonces continuamos con lo que las rutas hacen. No envío error ni retorno nada (solo un true).
    //         return cb(null, true);
    //     }
    //     cb("Error: El archivo deber ser un tipo de imagen.") //Sino envio este error.
    // }
});

module.exports = upload;

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Especifica el directorio de subida (donde se guardarán las imagenes subidas).
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });