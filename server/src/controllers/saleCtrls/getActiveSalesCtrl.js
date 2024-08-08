require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getActiveSalesCtrl = async () => {

    const activeSales = await Sale.find({active: true})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products',
    });

    return activeSales;

}

module.exports = getActiveSalesCtrl;