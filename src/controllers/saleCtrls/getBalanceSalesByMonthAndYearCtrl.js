require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getBalanceSalesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    // Convertimos los valores a enteros
    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);

    const startOfMonth = new Date(parsedYear, parsedMonth, 1);
    const endOfMonth = new Date(parsedYear, parsedMonth + 1, 1); // El primer día del mes siguiente
    
    // Filtrar las ventas por el mes y el año
    const sales = await Sale.find({
      ...filter,
      date: {
        $gte: startOfMonth, // Fecha de inicio del mes
        $lt: endOfMonth // Fecha de inicio del siguiente mes
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
