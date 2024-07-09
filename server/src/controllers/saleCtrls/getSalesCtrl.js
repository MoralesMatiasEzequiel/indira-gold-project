require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesCtrl = async () => {
    const sales = await Sale.find()
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