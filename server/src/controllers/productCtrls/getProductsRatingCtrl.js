require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getProductsRatingCtrl = async () => {
    
    try {
        const sales = await Sale.find().populate('products');

        // Contador de productos vendidos
        const productCount = new Map();

        // Almacenar todos los productos vendidos y contar las ventas por producto
        sales.forEach(sale => {
            sale.products.forEach(product => {
                if (productCount.has(product.name)) {
                    productCount.get(product.name).count += 1;
                } else {
                    productCount.set(product.name, { product, count: 1 });
                }
            });
        });

        // Obtener todos los productos vendidos
        const allSoldProducts = Array.from(productCount.values()).map(item => item.product);

        // Obtener los cinco productos más vendidos
        const topFiveProducts = Array.from(productCount.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .map(item => item.product);

        return { allSoldProducts, topFiveProducts };
    } catch (error) {
        console.error("Error al obtener los productos vendidos:", error);
        throw error;
    }
};

module.exports = getProductsRatingCtrl;