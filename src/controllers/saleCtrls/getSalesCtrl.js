require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesCtrl = async () => {
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    const sales = await Sale.find({ date: { $gte: twoYearsAgo } })
        .populate({
            path: 'client'
        })
        .populate({
            path: 'products',
            populate: {
                path: 'category',
            }
        });

    return sales;
};

module.exports = getSalesCtrl;
