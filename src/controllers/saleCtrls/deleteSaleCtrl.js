require('../../db.js');
const Sale = require('../../collections/Sale.js');

const deleteSaleCtrl = async (_id) => {
    const deleted = await Sale.deleteOne({_id})
    
    return deleted;
}

module.exports = deleteSaleCtrl;