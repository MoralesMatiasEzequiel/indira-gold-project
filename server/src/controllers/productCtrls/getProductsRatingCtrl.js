const mongoose = require('mongoose');
require('../../db.js');
const Sale = require('../../collections/Sale.js');
const Product = require('../../collections/Product.js');

const getProductsRatingCtrl = async () => {
    try {
        // Obtener los productos más vendidos utilizando una agregación
        const salesAggregation = await Sale.aggregate([
            { $unwind: "$products" },
            {
                $group: {
                    _id: {
                        productId: "$products.productId",
                        colorId: "$products.colorId",
                        sizeId: "$products.sizeId"
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 5 }
        ]);

        // Obtener detalles de los productos más vendidos
        const topProductIds = salesAggregation.map(item => item._id.productId);
        const products = await Product.find({ _id: { $in: topProductIds } }).lean();

        // Mapear los resultados de la agregación con los detalles de los productos
        const topFiveProducts = salesAggregation.map(item => {
            const product = products.find(p => p._id.equals(item._id.productId));
            
            if (!product) {
                console.error(`Producto no encontrado: ${item._id.productId}`);
                return null;
            };
            
            const color = product.color.find(c => c._id.equals(item._id.colorId));
            
            if (!color) {
                console.error(`Color no encontrado: ${item._id.colorId}`);
                return null;
            };
            
            const size = color.size.find(s => s._id.equals(item._id.sizeId));
            
            if (!size) {
                console.error(`Tamaño no encontrado: ${item._id.sizeId}`);
                return null;
            };

            return {
                productName: product.name,
                colorName: color.colorName,
                sizeName: size.sizeName,
                count: item.count
            };
        }).filter(result => result !== null); // Filtra los elementos nulos

        return { topFiveProducts };
    } catch (error) {
        console.error("Error al obtener los productos vendidos:", error);
        throw error;
    }
};

module.exports = getProductsRatingCtrl;
