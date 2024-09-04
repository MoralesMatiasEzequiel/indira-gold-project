require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductByNameCtrl = async (name) => {

    const regex = new RegExp(`.*${name}.*`, 'i');
    
    const product = await Product.find({ name: regex })
    .populate({
        path: 'category'
    });
    
    return product;
}

module.exports = getProductByNameCtrl;