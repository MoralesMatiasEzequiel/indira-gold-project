require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesCtrl = async () => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    const sales = await Sale.find({ date: { $gte: twoYearsAgo } }) // Filtra por fecha
        .populate({
            path: 'client'
        })
        .populate({
            path: 'products'
        });

    return sales;
};

module.exports = getSalesCtrl;
