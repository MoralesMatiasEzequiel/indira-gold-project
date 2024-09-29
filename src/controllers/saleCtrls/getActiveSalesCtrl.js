require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getActiveSalesCtrl = async () => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    const activeSales = await Sale.find({
        active: true,
        date: { $gte: twoYearsAgo }  
    })
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products',
    });

    return activeSales;
};

module.exports = getActiveSalesCtrl;
