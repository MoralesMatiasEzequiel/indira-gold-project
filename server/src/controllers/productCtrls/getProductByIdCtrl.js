require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductByIdCtrl = async (_id) => {
    
    const product = await Product.findOne({_id})
    .populate({
        path: 'category'
    });
    
    return product;
}

module.exports = getProductByIdCtrl;