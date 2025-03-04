require('../../db.js');
const Debt = require('../../collections/Debt.js');
const Sale = require('../../collections/Sale.js');

const postDebtCtrl = async (saleId, amount) => {
    
    try {
        // Buscar la venta
        const sale = await Sale.findById(saleId);
        if (!sale) throw new Error('Sale not found');

        // Extraer los datos necesarios
        const clientId = sale.client._id;  // ID del cliente
        const totalWithFee = sale.totalWithFee;  // Total de la venta

        // Calcular saldo restante
        const remainingBalance = totalWithFee - amount;
        if (remainingBalance < 0) throw new Error('Amount exceeds total sale value');

        // Crear objeto de ingreso
        const incomeEntry = {
            date: new Date(),
            amount
        };

        // Crear la deuda
        const newDebt = {
            sale: saleId,
            client: clientId,
            income: [incomeEntry],
            paymentMade: amount,
            remainingBalance,
            active: true
        };

        const debtCreated = await Debt.create(newDebt);
        
        return debtCreated;
        
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = postDebtCtrl;