require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSoldProductCtrl = async (req, res) => {
  try {
    // Encuentra todas las ventas activas
    const sales = await Sale.find({ active: true }).select('products');

    // Extrae y cuenta las categorías
    const categoryCounts = sales.reduce((acc, sale) => {
      sale.products.forEach(product => {
        if (product.category) {
          acc[product.category] = (acc[product.category] || 0) + 1;
        } else {
          console.warn('Categoría no encontrada en producto:', product);
        }
      });
      return acc;
    }, {});

    // Convierte el objeto de conteos en un array y ordenado por cantidad descendente
    const topCategories = Object.entries(categoryCounts)
      .map(([categoryName, count]) => ({ categoryName, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return topCategories;
    
  } catch (error) {
    console.error('Error al obtener las categorías de productos vendidos:', error);;
  }
};

module.exports = getSoldProductCtrl;
