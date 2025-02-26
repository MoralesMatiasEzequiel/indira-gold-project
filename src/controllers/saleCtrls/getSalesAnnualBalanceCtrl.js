require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Debt = require('../../collections/Debt.js');

const getSalesAnnualBalanceCtrl = async (year) => {
    try {
        const sales = await Sale.find({ active: true }).populate('products');
        const debts = await Debt.find({ active: true });

        const annualBalance = {
            soldProducts: 0,
            totalRevenue: 0
        };

        const startOfYear = new Date(year, 0, 1, 0, 0, 0, 0);
        const endOfYear = new Date(parseInt(year) + 1, 0, 1, 0, 0, 0, 0);

        // Calcular ingresos por ventas directas (excluyendo ventas a crédito)
        sales.forEach(sale => {
            const saleDate = new Date(sale.date);
            if (saleDate >= startOfYear && saleDate < endOfYear) {
                annualBalance.soldProducts += sale.products.length;

                // Solo sumar el ingreso si no tiene una deuda asociada
                const hasDebt = debts.some(debt => debt.sale._id.toString() === sale._id.toString());
                if (!hasDebt) {
                    annualBalance.totalRevenue += sale.totalWithFee;
                }
            }
        });

        // Calcular ingresos por pagos de deudas en el año correspondiente
        debts.forEach(debt => {
            debt.income.forEach(payment => {
                const paymentDate = new Date(payment.date);
                if (paymentDate >= startOfYear && paymentDate < endOfYear) {
                    annualBalance.totalRevenue += payment.amount;
                }
            });
        });

        return annualBalance;

    } catch (error) {
        throw new Error(error.message);
    }
};


module.exports = getSalesAnnualBalanceCtrl;

// const totalProductsSold = sale.products.length;
// const totalRevenue = sale.totalPrice;

// annualBalance.soldProducts += totalProductsSold;
// annualBalance.totalRevenue += totalRevenue;