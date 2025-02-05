require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Debt = require('../../collections/Debt.js');

const getSalesBalanceCtrl = async () => {
    
    try {
        const sales = await Sale.find({active: true}).populate('products');
        const debts = await Debt.find({active: true});

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfYear = new Date(now.getFullYear(), 0, 1);

        const balances = {
            daily: { soldProducts: 0, totalRevenue: 0 },
            weekly: { soldProducts: 0, totalRevenue: 0 },
            monthly: { soldProducts: 0, totalRevenue: 0 },
            annually: { soldProducts: 0, totalRevenue: 0 }
        };

        // Crear un Map para acceder a las deudas en O(1)
        const debtMap = new Map();
        debts.forEach(debt => {
            debtMap.set(debt.sale.toString(), debt.income.reduce((sum, entry) => sum + entry.amount, 0));
        });

        sales.forEach(sale => {
            const saleDate = new Date(sale.date);
            const totalProductsSold = sale.products.length;
            // const totalRevenue = sale.totalWithFee;

            //OPC 1:
            // // Buscar si esta venta tiene una deuda registrada
            // const debt = debts.find(d => d.sale.toString() === sale._id.toString());
            // // Si tiene deuda, sumar solo lo que ha sido pagado
            // const paidAmount = debt ? debt.income.reduce((sum, entry) => sum + entry.amount, 0) : sale.totalWithFee;

            //OPC 2:
            // Obtener el monto pagado (si hay deuda, tomar el total pagado, si no, tomar total de la venta)
            const paidAmount = debtMap.has(sale._id.toString()) ? debtMap.get(sale._id.toString()) : sale.totalWithFee;

            if (saleDate >= startOfDay) {
                balances.daily.soldProducts += totalProductsSold;
                balances.daily.totalRevenue += paidAmount;
                // balances.daily.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfWeek) {
                balances.weekly.soldProducts += totalProductsSold;
                balances.weekly.totalRevenue += paidAmount;
                // balances.weekly.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfMonth) {
                balances.monthly.soldProducts += totalProductsSold;
                balances.monthly.totalRevenue += paidAmount;
                // balances.monthly.totalRevenue += totalRevenue;
            }
            if (saleDate >= startOfYear) {
                balances.annually.soldProducts += totalProductsSold;
                balances.annually.totalRevenue += paidAmount;
                // balances.annually.totalRevenue += totalRevenue;
            }
        });

        return balances;

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSalesBalanceCtrl;
