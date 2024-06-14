require('../../db.js');
const Category = require('../../collections/Category.js');

const putCategoryCtrl = async (_id, name) => {

    const updated = await Category.updateOne({_id}, {$set: {name}});

    return updated;
};

module.exports = putCategoryCtrl;