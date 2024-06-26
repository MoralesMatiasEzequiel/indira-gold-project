require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductsCtrl = async () => {
    const products = await Product.find({ active: true })
    .populate({
        path: 'category'
    });

    return products;
};

module.exports = getProductsCtrl;