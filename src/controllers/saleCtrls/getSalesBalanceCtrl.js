require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Debt = require('../../collections/Debt.js');

const getSalesBalanceCtrl = async () => {

    try {
        const sales = await Sale.find({ active: true }).populate('products');
        const debts = await Debt.find({ active: true });

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        // const startOfYear = new Date(now.getFullYear(), 0, 1);

        const balances = {
            daily: { soldProducts: 0, totalRevenue: 0 },
            weekly: { soldProducts: 0, totalRevenue: 0 },
            monthly: { soldProducts: 0, totalRevenue: 0 },
            // annually: { soldProducts: 0, totalRevenue: 0 }
        };

        // Procesar ventas (solo ingresos directos)
        sales.forEach(sale => {
            const saleDate = new Date(sale.date);
            const totalProductsSold = sale.products.length;

            // Verificar si la venta es a crédito
            const hasDebt = debts.some(debt => debt.sale._id.toString() === sale._id.toString());

            if (saleDate >= startOfDay) {
                balances.daily.soldProducts += totalProductsSold;
                if (!hasDebt) {
                    balances.daily.totalRevenue += sale.totalWithFee;
                }
            }
            if (saleDate >= startOfWeek) {
                balances.weekly.soldProducts += totalProductsSold;
                if (!hasDebt) {
                    balances.weekly.totalRevenue += sale.totalWithFee;
                }
            }
            if (saleDate >= startOfMonth) {
                balances.monthly.soldProducts += totalProductsSold;
                if (!hasDebt) {
                    balances.monthly.totalRevenue += sale.totalWithFee;
                }
            }
            // if (saleDate >= startOfYear) {
            //     balances.annually.soldProducts += totalProductsSold;
            //     if (!hasDebt) {
            //         balances.annually.totalRevenue += sale.totalWithFee;
            //     }
            // }
        });

        // Procesar pagos de deudas (ingresos parciales)
        debts.forEach(debt => {
            debt.income.forEach(payment => {
                const paymentDate = new Date(payment.date);
                const amountPaid = payment.amount;

                if (paymentDate >= startOfDay) {
                    balances.daily.totalRevenue += amountPaid;
                }
                if (paymentDate >= startOfWeek) {
                    balances.weekly.totalRevenue += amountPaid;
                }
                if (paymentDate >= startOfMonth) {
                    balances.monthly.totalRevenue += amountPaid;
                }
                // if (paymentDate >= startOfYear) {
                //     balances.annually.totalRevenue += amountPaid;
                // }
            });
        });

        return balances;

    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getSalesBalanceCtrl;
