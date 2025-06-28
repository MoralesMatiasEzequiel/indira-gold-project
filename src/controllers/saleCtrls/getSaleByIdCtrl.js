require('../../db.js');
const Sale = require('../../collections/Sale.js');
const getActiveDebtsCtrl = require('../debtCtrls/getActiveDebtsCtrl.js');

const getSaleByIdCtrl = async (_id) => {
    // Obtener la venta
    const sale = await Sale.findOne({_id})
    .populate({
        path: 'client'
    })
    .populate({
        path: 'products'
    });

    if (!sale) return null; // Si no existe la venta, retornar null

    // Obtener todas las deudas activas
    const debts = await getActiveDebtsCtrl();
    
    // Buscar si existe una deuda para esta venta
    const debtForSale = debts.find(debt => debt.sale._id.toString() === _id.toString());
    
    // Crear el objeto de venta con la información de deuda
    const saleWithDebt = {
        ...sale.toObject(), // Convertir el documento mongoose a objeto plano
        debt: debtForSale ? debtForSale.remainingBalance : 0 // Asignar remainingBalance o 0 si no hay deuda
    };

    return saleWithDebt;
}

module.exports = getSaleByIdCtrl;