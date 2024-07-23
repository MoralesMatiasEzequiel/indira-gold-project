require('../../db.js');
const Sale = require('../../collections/Sale.js');

const putSaleStatusCtrl = async (_id) => {

    const sale = await Sale.findById(_id);
    const newStatus = !sale.active;

    const updatedStatus = await Sale.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putSaleStatusCtrl;