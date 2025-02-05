require('../../db.js');
const Debt = require('../../collections/Debt.js');
const Sale = require('../../collections/Sale.js');

const putDebtAmountCtrl = async (_id, saleId, amount, incomeId) => {

    try {
        // Buscar la deuda existente
        const debt = await Debt.findById(_id);
        if (!debt) throw new Error('Debt not found');

        // Buscar la venta
        const sale = await Sale.findById(saleId);
        if (!sale) throw new Error('Sale not found');

        // Verificar que saleId coincida con la deuda
        if (debt.sale.toString() !== saleId) {
            throw new Error('Sale ID does not match with existing debt');
        };

        // Buscar el pago a editar dentro de income
        const incomeIndex = debt.income.findIndex(income => income._id.toString() === incomeId);
        if (incomeIndex === -1) throw new Error('Income entry not found');

        // Obtener el monto anterior
        const oldAmount = debt.income[incomeIndex].amount;

        // Actualizar el monto del pago en income
        debt.income[incomeIndex].amount = amount;

        // Recalcular el saldo restante
        debt.remainingBalance = debt.remainingBalance + (oldAmount - amount);

        if (debt.remainingBalance < 0) throw new Error('Amount correction exceeds total debt');

        // Guardar cambios
        await debt.save();

        return debt;
        
    } catch (error) {
        throw new Error('Error updating debt: ' + error.message);
    }
};

module.exports = putDebtAmountCtrl;
