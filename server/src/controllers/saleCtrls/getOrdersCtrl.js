require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesCtrl = async () => {
    const sales = await Sale.find();

    return sales;
};

module.exports = getSalesCtrl;