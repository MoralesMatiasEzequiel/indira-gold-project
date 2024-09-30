require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductColorsCtrl = async () => {

    const products = await Product.find({}, 'color.colorName');

    const colorNamesSet = new Set();

    products.forEach(product => {
        product.color.forEach(color => {
            colorNamesSet.add(color.colorName);
        });
    });

    const colorNamesArray = Array.from(colorNamesSet);

    return colorNamesArray;
}

module.exports = getProductColorsCtrl;
