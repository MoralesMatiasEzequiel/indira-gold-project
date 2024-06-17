require('../../db.js');
const Product = require('../../collections/Product.js');

const putProductCtrl = async (_id, name, color, description, category) => {

    const updated = await Product.updateOne({_id}, {$set: {name, color, description, category}}
    );
    return updated;
};

module.exports = putProductCtrl;