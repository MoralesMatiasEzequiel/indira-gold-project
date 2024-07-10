require('../../db.js');
const Sale = require('../../collections/Sale.js');

const getSoldProductCtrl = async () => {
    try {
        const sales = await Sale.find()
        .populate({
            path: 'products',
            populate: {
                path: 'category',
            }
        });

        // Objeto para almacenar productos por categoría
        const productsByCategory = {};

        // Iterar sobre cada venta
        sales.forEach(sale => {
            // Iterar sobre cada producto vendido en la venta
            sale.products.forEach(product => {
                // Obtener la categoría del producto
                const category = product.category[0]; 

                // Inicializar la categoría si aún no existe en el objeto
                if (!productsByCategory[category]) {
                    productsByCategory[category] = {
                        categoryName: product.category[0].name,
                        soldProducts: []
                    };
                }

                // Agregar el producto vendido al array correspondiente
                productsByCategory[category].soldProducts.push(product);
            });
        });

        // Convertir el objeto en un array de objetos y devolverlo
        const resultArray = Object.values(productsByCategory);

        return resultArray;
    } catch (error) {
        console.error("Error al obtener los productos vendidos:", error);
    }
};

module.exports = getSoldProductCtrl;
