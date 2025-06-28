require('../../db.js');
const Sale = require('../../collections/Sale.js');
const getActiveDebtsCtrl = require('../debtCtrls/getActiveDebtsCtrl.js');

const getActiveSalesCtrl = async () => {
    // Obtener las deudas activas
    const debts = await getActiveDebtsCtrl();

    // Crear un mapa de deudas por saleId para acceso rápido
    const debtMap = {};
    debts.forEach(debt => {
        debtMap[debt.sale._id.toString()] = debt.remainingBalance;
    });

    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

    // Obtener las ventas activas
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

    // Añadir la propiedad debt a cada venta
    const salesWithDebt = activeSales.map(sale => {
        const saleId = sale._id.toString();
        return {
            ...sale.toObject(), // Convertir el documento mongoose a objeto plano
            debt: debtMap[saleId] || 0 // Asignar el remainingBalance o 0 si no existe
        };
    });

    return salesWithDebt;
};

module.exports = getActiveSalesCtrl;