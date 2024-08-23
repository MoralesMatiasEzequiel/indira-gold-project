require('../../db.js');
const Sale = require('../../collections/Sale.js');
const mongoose = require('mongoose');

const getMonthlySalesByClientCtrl = async (id) => {
  try {
    // Calcula la fecha de hace un mes desde hoy
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    // Obtiene todas las ventas del cliente realizadas en el último mes
    const sales = await Sale.find({
      client: { $in: id },
      date: { $gte: oneMonthAgo },
      active: true
    });

    // Suma el total de productos en esas ventas
    const totalProducts = sales.reduce((sum, sale) => sum + sale.products.length, 0);

    return { totalProducts };
  } catch (error) {
    console.error("Error fetching monthly sales by client:", error);
    throw error;
  }
};

module.exports = getMonthlySalesByClientCtrl;
