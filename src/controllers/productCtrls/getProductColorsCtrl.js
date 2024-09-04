require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductColorsCtrl = async () => {

    // Se consulta solo los campos necesarios, en este caso el de 'color.colorName'
    const products = await Product.find({}, 'color.colorName');

    // Usamos un Set para nombres de colores únicos
    const colorNamesSet = new Set();

    products.forEach(product => {
        product.color.forEach(color => {
            colorNamesSet.add(color.colorName);
        });
    });

    // Se convierte el Set en un Array
    const colorNamesArray = Array.from(colorNamesSet);

    return colorNamesArray;
}

module.exports = getProductColorsCtrl;
