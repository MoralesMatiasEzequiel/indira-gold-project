const Product = require('../../collections/Product.js');

const putIncreasePriceCtrl = async (porcentage, category) => {
    try {
        let products;

        if (category && category.length > 0) {
            // Obtener los productos que coincidan con la categoría especificada
            const categoryId = category[0].value; // Tomamos el id de la primera categoría del array
            products = await Product.find({ 
                category: categoryId, 
                active: true 
            }).populate('category');
        } else {
            // Si no se especifica categoría, obtener todos los productos activos
            products = await Product.find({ active: true });
        }

        // Aumentar el precio en el porcentaje especificado
        const updatedProducts = await Promise.all(products.map(async (product) => {
            product.price = product.price + (product.price * (porcentage / 100));
            await product.save(); // Guardar los cambios en la base de datos
            return product;
        }));

        return updatedProducts;
    } catch (error) {
        console.error('Error updating product prices:', error);
        throw new Error('Failed to update product prices.');
    }
};

module.exports = putIncreasePriceCtrl;
