require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSaleByOrderNumberCtrl = async (orderNumber) => {

    const regex = new RegExp(`.*${orderNumber}.*`, 'i');

    if (orderNumber) {
        const sale = await Sale.find({ orderNumber: regex, active: true })
        .populate({
            path: 'client'
        })
        .populate({
            path: 'products'
        });
        return sale;
    };
}

module.exports = getSaleByOrderNumberCtrl;