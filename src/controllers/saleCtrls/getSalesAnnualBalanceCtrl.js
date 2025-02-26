require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Debt = require('../../collections/Debt.js');


const getSalesAnnualBalanceCtrl = async (year) => {

    try {
        const sales = await Sale.find({active: true}).populate('products');
        const debts = await Debt.find({active: true});

        const debtMap = new Map();
        debts.forEach(debt => {
            debtMap.set(debt.sale.toString(), debt.income.reduce((sum, entry) => sum + entry.amount, 0));
        });

        const annualBalance = {
            soldProducts: 0, 
            totalRevenue: 0
        };

        // Convertir el año a un rango de fechas para filtrar las ventas
        const startOfYear = new Date(year, 0, 1, 0, 0, 0, 0); // 1 de enero del año 'year'.
        const endOfYear = new Date((parseInt(year) + 1), 0, 1, 0, 0, 0, 0);

        sales.forEach(sale => {
            const saleDate = new Date(sale.date);
            const totalProductsSold = sale.products.length;
            const paidAmount = debtMap.has(sale._id.toString()) ? debtMap.get(sale._id.toString()) : sale.totalWithFee;

            if (saleDate >= startOfYear && saleDate < endOfYear) {
                annualBalance.soldProducts += totalProductsSold;
                annualBalance.totalRevenue += paidAmount;
            }
        });

        return annualBalance;

    } catch (error) {
        // res.status(500).json({ error: error.message });
        console.log(error);
        throw new Error('Error when obtaining the annual sales balance.');
    }
};

module.exports = getSalesAnnualBalanceCtrl;

// const totalProductsSold = sale.products.length;
// const totalRevenue = sale.totalPrice;

// annualBalance.soldProducts += totalProductsSold;
// annualBalance.totalRevenue += totalRevenue;