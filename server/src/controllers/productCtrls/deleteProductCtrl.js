require('../../db.js');
const Product = require('../../collections/Product.js');

const deleteProductCtrl = async (id) => {
    const deleted = await Product.deleteOne({id})
    
    return deleted;
}

module.exports = deleteProductCtrl;