require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductsSaleCtrl = async () => {
    const productsSale = await Product.find({sale: { $gt: 0 }, active: true});

    return productsSale;
};

module.exports = getProductsSaleCtrl;