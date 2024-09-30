require('../../db.js');
const Sale = require('../../collections/Sale.js');
const mongoose = require('mongoose');

const getSoldProductCtrl = async (req, res) => {
  try {
    
    const sales = await Sale.find({ active: true }).select('products');

    const categoryCounts = sales.reduce((acc, sale) => {
      sale.products.forEach(product => {
        let categoryName = product.category;

        if (!categoryName || mongoose.Types.ObjectId.isValid(categoryName)) {
          categoryName = 'Sin nombre';
        }

        acc[categoryName] = (acc[categoryName] || 0) + 1;
      });
      return acc;
    }, {});

    const topCategories = Object.entries(categoryCounts)
      .map(([categoryName, count]) => ({ categoryName, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return topCategories;
    
  } catch (error) {
    console.error('Error al obtener las categorías de productos vendidos:', error);
  }
};

module.exports = getSoldProductCtrl;
