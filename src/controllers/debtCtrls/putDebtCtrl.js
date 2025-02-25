require('../../db.js');
const Debt = require('../../collections/Debt.js');
const Sale = require('../../collections/Sale.js');

const putDebtCtrl = async (_id, saleId, income) => {
    try {
        // 1. Buscar la deuda por su ID
        const debt = await Debt.findById(_id).populate('sale');

        if (!debt) {
            throw new Error('Debt not found');
        }

        // 2. Si se proporciona un saleId, actualizar la venta y el cliente
        if (saleId) {
            const sale = await Sale.findById(saleId);

            if (!sale) {
                throw new Error('Sale not found');
            }

            // Actualizar la venta y el cliente asociado a la deuda
            debt.sale = sale;
            debt.client = sale.client._id;
        }

        // 3. Si se proporciona un array de pagos (income), actualizarlo
        if (income && Array.isArray(income)) {
            // Mapear IDs de los pagos existentes
            const existingPayments = new Map(debt.income.map(payment => [payment._id?.toString(), payment]));

            // Nueva lista de pagos actualizada
            debt.income = income?.map(payment => {
                if (payment._id && existingPayments.has(payment._id.toString())) {
                    // Si el pago ya existe, actualizar su monto
                    return {
                        ...existingPayments.get(payment._id.toString()),
                        amount: payment.amount
                    };
                } else {
                    // Si el pago no existe, agregarlo
                    return {
                        date: payment.date, // Usar la fecha enviada desde el frontend
                        amount: payment.amount
                    };
                }
            });
        }

        // 4. Recalcular `paymentMade` y `remainingBalance`
        debt.paymentMade = debt.income.reduce((total, payment) => total + payment.amount, 0);
        debt.remainingBalance = debt.sale.totalWithFee - debt.paymentMade;

        // 5. Si la deuda está completamente pagada, marcar como inactiva
        if (debt.remainingBalance <= 0) {
            debt.remainingBalance = 0; // Asegurar que no quede saldo negativo
            debt.active = false;
        }

        // 6. Guardar los cambios en la deuda
        const updatedDebt = await debt.save();

        return updatedDebt;

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = putDebtCtrl;
