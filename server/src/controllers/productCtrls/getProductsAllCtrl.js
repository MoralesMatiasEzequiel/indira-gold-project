require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductsAllCtrl = async () => {
    const products = await Product.find();

    return products;
};

module.exports = getProductsAllCtrl;