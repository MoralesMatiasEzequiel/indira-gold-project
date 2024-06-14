require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductByIdCtrl = async (_id) => {
    // const product = await Product.findOne({_id, active: true})
    const product = await Product.findOne({_id})
    
    return product;
}

module.exports = getProductByIdCtrl;