require('../../db.js');
const Product = require('../../collections/Product.js');

const putProductStatusCtrl = async (_id) => {

    const product = await Product.findById(_id);
    const newActiveStatus = !product.active;

    const updatedStatus = await Product.updateOne(
        {_id}, {$set: {active: newActiveStatus}}
    );

    return updatedStatus;
};

module.exports = putProductStatusCtrl;