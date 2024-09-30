require('../../db.js');
const Sale = require('../../collections/Sale.js');
const mongoose = require('mongoose');

const getMonthlySalesByClientCtrl = async (id) => {
  try {

    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const sales = await Sale.find({
      client: { $in: id },
      date: { $gte: oneMonthAgo },
      active: true
    });

    const totalProducts = sales.reduce((sum, sale) => sum + sale.products.length, 0);

    return { totalProducts };
  } catch (error) {
    console.error("Error fetching monthly sales by client:", error);
    throw error;
  }
};

module.exports = getMonthlySalesByClientCtrl;
