require('../../db.js');
const Category = require('../../collections/Category.js');

const putCategoryCtrl = async (_id, name, categories) => {

    const updated = await Category.updateOne({_id}, {$set: {name, categories}});

    return updated;
};

module.exports = putCategoryCtrl;