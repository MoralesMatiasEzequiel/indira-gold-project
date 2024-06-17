require('../../db.js');
const Product = require('../../collections/Product.js');

const deleteProductCtrl = async (_id) => {
    const deleted = await Product.deleteOne({_id})
    
    return deleted;
}

module.exports = deleteProductCtrl;