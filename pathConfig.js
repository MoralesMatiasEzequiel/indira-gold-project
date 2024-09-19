const path = require('path');  //Este módulo une directorios

const rootDir = path.resolve(__dirname);
const uploadsDir = path.join(rootDir, 'uploads');  //Acá se une el directorio de '__dirname' (guardado en 'rootDir') con 'uploads'. De esta manera indicamos dónde está la carpeta 'uploads'.

module.exports = {
    rootDir,
    uploadsDir,
};