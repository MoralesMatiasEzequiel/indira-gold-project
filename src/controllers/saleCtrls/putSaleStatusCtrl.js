require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Debt = require('../../collections/Debt.js');

const putSaleStatusCtrl = async (_id) => {

    const sale = await Sale.findById(_id);
    if (!sale) {
        throw new Error("Sale not found");
    }

    const newStatus = !sale.active;

    // Actualizar estado de la venta
    const updatedStatus = await Sale.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    // Si se está desactivando la venta, eliminar deuda asociada
    if (!newStatus) {
        await Debt.deleteOne({ sale: sale._id });
    }

    return updatedStatus;
};

module.exports = putSaleStatusCtrl;