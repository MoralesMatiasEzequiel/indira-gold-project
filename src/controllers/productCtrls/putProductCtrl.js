const Product = require('../../collections/Product.js');

const putProductCtrl = async (_id, name, color, supplier, price, category, description, active, imageGlobal) => {
    
    const updateFields = {
        name,
        color,
        supplier,
        imageGlobal: imageGlobal || null,
        price,
        category,
        description,
        active
    };

    try {
        const updatedProduct = await Product.updateOne({ _id }, { $set: updateFields });

        if (updatedProduct.nModified === 0) {
            throw new Error('No changes detected or product not found');
        }

        return updatedProduct;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = putProductCtrl;