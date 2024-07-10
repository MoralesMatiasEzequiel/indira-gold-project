require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSalesBalanceCtrl = async () => {
    try {
        const sales = await Sale.find().populate('products');

        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const startOfYear = new Date(today.getFullYear(), 0, 1);

        const balances = {
            daily: { soldProducts: 0, totalRevenue: 0 },
            weekly: { soldProducts: 0, totalRevenue: 0 },
            monthly: { soldProducts: 0, totalRevenue: 0 },
            annually: { soldProducts: 0, totalRevenue: 0 }
        };

        sales.forEach(sale => {
            const saleDate = new Date(sale.date);
            const totalProductsSold = sale.products.length;
            const totalRevenue = sale.totalPrice;

            if (saleDate >= startOfDay) {
                balances.daily.soldProducts += totalProductsSold;
                balances.daily.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfWeek) {
                balances.weekly.soldProducts += totalProductsSold;
                balances.weekly.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfMonth) {
                balances.monthly.soldProducts += totalProductsSold;
                balances.monthly.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfYear) {
                balances.annually.soldProducts += totalProductsSold;
                balances.annually.totalRevenue += totalRevenue;
            }
        });

        return balances;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSalesBalanceCtrl;
