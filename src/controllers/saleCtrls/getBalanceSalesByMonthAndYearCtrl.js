require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getBalanceSalesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    // Filtrar las ventas por el mes y el año
    const sales = await Sale.find({
      ...filter,
      date: {
        $gte: new Date(year, month, 1), // Fecha de inicio del mes
        $lt: new Date(year, month + 1, 1) // Fecha de inicio del siguiente mes
      }
    });

    // Calcular las sumas
    const totalSales = sales.reduce((acc, sale) => acc + sale.totalPrice, 0);
    const totalPaymentFee = sales.reduce((acc, sale) => acc + sale.paymentFeeApplied, 0);

    return {
      totalSales,
      totalPaymentFee
    };
  }

  return {
    totalSales: 0,
    totalPaymentFee: 0
  };
};

module.exports = getBalanceSalesByMonthAndYearCtrl;
