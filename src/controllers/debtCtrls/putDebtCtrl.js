require('../../db.js');
const Debt = require('../../collections/Debt.js');
const Sale = require('../../collections/Sale.js');

const putDebtCtrl = async (_id, saleId, amount) => {

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

        // Calcular nuevo saldo restante
        const newRemainingBalance = debt.remainingBalance - amount;
        if (newRemainingBalance < 0) throw new Error('Amount exceeds remaining balance');

        // Agregar nuevo pago al array 'income'
        debt.income.push({
            date: new Date(),
            amount
        });

        // Actualizar saldo restante
        debt.remainingBalance = newRemainingBalance;

        // Guardar cambios
        await debt.save();

        return debt;
        
    } catch (error) {
        throw new Error('Error updating debt: ' + error.message);
    }
};

module.exports = putDebtCtrl;
