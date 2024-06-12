require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductByIdCtrl = async (_id) => {
    const product = await Product.findOne({_id, active: true})
    
    return product;
}

module.exports = getProductByIdCtrl;