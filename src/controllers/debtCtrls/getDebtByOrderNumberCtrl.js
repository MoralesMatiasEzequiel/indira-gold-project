require('../../db.js');
const Debt = require('../../collections/Debt.js');

const getDebtByOrderNumberCtrl = async (orderNumber) => {

    if (orderNumber) {        
        const debts = await Debt.find({})  // Buscar todas las deudas
            .populate('sale')  // Rellenar el campo 'sale' con los datos completos de la venta
            .exec();

        // Filtra las deudas después de hacer el populate
        const filteredDebts = debts.filter(debt => debt.sale.orderNumber.includes(orderNumber));
        
        return filteredDebts;
    }
}

module.exports = getDebtByOrderNumberCtrl;
