require('../../db.js');
const Product = require('../../collections/Product.js');

const putProductCtrl = async (_id, updateFields) => {
    // `updateFields` es un objeto que contiene los campos a actualizar
    const updated = await Product.updateOne({ _id }, { $set: updateFields });
    return updated;
};

module.exports = putProductCtrl;