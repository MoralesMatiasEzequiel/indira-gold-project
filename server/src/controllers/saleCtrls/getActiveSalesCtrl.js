require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getActiveSalesCtrl = async () => {

    const activeSales = await Sale.find({active: true})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products',
        // populate: {
        //     path: 'category',    
        // }
    });

    return activeSales;

}

module.exports = getActiveSalesCtrl;