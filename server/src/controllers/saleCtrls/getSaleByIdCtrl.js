require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSaleByIdCtrl = async (_id) => {
    
    const sale = await Sale.findOne({_id})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products'
    });;
    
    return sale;
}

module.exports = getSaleByIdCtrl;