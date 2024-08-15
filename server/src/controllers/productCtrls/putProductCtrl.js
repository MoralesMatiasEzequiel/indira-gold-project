const Product = require('../../collections/Product.js');

const putProductCtrl = async (_id, name, parsedColor, supplier, price, category, description, active, imageGlobalPath) => {
    const updateFields = {
        name,
        color: parsedColor,
        supplier,
        imageGlobal: imageGlobalPath || null,
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