const Product = require('../../collections/Product.js');

const putIncreasePriceCtrl = async (adjust, porcentage, products, category) => {
    try {
        let productsDB;

        if (products && products.length > 0) {

            productsDB = await Product.find({
                _id: { $in: products.map(p => p.value) },
                active: true
            });
        } else if (category && category.length > 0) {

            const categoryId = category[0].value;
            productsDB = await Product.find({
                category: categoryId,
                active: true
            }).populate('category');
        } else {
            productsDB = await Product.find({ active: true });
        };

        if(adjust && adjust === 'increase'){
        const updatedProducts = await Promise.all(productsDB.map(async (product) => {
            product.price = product.price + (product.price * (porcentage / 100));
            await product.save();
            return product;
        }));
            return updatedProducts;
        };

        if (adjust && adjust === 'decrease') {
            const updatedProducts = await Promise.all(productsDB.map(async (product) => {
                product.price = product.price - (product.price * (porcentage / 100));
                await product.save();
                return product;
            }));
            return updatedProducts;
        };
        
    } catch (error) {
        console.error('Error updating product prices:', error);
        throw new Error('Failed to update product prices.');
    }
};

module.exports = putIncreasePriceCtrl;