const Debt = require('../../collections/Debt.js');

const getDebtsByMonthAndYearCtrl = async (month, year) => {
    try {
        const debts = await Debt.find().populate('sale');
        // const debts = await Debt.find({ active: true}).populate('sale');

        let totalAmount = 0; 
        let totalDebts = 0;

        debts.forEach(debt => {
            if (!debt.sale) {
                return; // Saltar esta iteración si la venta no está presente
            }

            // Verificamos los pagos registrados en el mes y año consultado
            if (debt.income && debt.income.length > 0) {
                const saleDate = new Date(debt.sale.date);
                const saleMonth = saleDate.getMonth();
                const saleYear = saleDate.getFullYear();
                
                if (saleMonth === parseInt(month) && saleYear === parseInt(year)) {
                    let deudaRestante = debt.sale.totalPrice; // Iniciamos con el total de la venta
                    
                    if (debt.income && debt.income.length > 0) {
                        debt.income.forEach(payment => {
                            const paymentDate = new Date(payment.date);
                            const paymentMonth = paymentDate.getMonth();
                            const paymentYear = paymentDate.getFullYear();
    
                            if (paymentMonth === parseInt(month) && paymentYear === parseInt(year)) {
                                totalAmount += payment.amount; // Sumamos pagos realizados
                                deudaRestante -= payment.amount; // Restamos pagos de la deuda restante
                            }
                        });
                    }
    
                    totalDebts += Math.max(deudaRestante, 0); // Evitar que sea negativo
                } else {
                    debt.income.forEach(payment => {
                        const paymentDate = new Date(payment.date);
                        const paymentMonth = paymentDate.getMonth() + 1;
                        const paymentYear = paymentDate.getFullYear();

                        if (paymentMonth === parseInt(month) && paymentYear === parseInt(year)) {
                            totalAmount += payment.amount;
                        }
                    });
                }
            }
        });

        return { totalAmount, totalDebts };

    } catch (error) {
        console.error("Error:", error);
        throw new Error(error.message);
    }
};

module.exports = getDebtsByMonthAndYearCtrl;
