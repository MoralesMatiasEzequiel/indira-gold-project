require('../../db.js');
const Product = require('../../collections/Product.js');

const getActiveProductsByNameCtrl = async (name) => {

    const regex = new RegExp(`.*${name}.*`, 'i');
    
    const product = await Product.find({ name: regex, active: true })
    .populate({
        path: 'category'
    });
    
    return product;
}

module.exports = getActiveProductsByNameCtrl;