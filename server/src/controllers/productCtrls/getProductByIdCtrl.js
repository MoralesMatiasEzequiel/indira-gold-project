require('../../db.js');
const Product = require('../../collections/Product.js');

const getProductByIdCtrl = async (_id) => {

    if (_id) {    
        const productById = await Product.findOne({_id})
        .populate({
            path: 'category'
        });
        return productById;
    };    
}

module.exports = getProductByIdCtrl;