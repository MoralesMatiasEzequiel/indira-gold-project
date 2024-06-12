require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductsCtrl = async () => {
    const products = await Product.find({ active: true });

    return products;
};

module.exports = getProductsCtrl;