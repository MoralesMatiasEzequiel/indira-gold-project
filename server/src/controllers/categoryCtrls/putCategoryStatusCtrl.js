require('../../db.js');
const Category = require('../../collections/Category.js');

const putCategoryStatusCtrl = async (_id) => {

    const category = await Category.findById(_id);
    const newStatus = !category.active;

    const updatedStatus = await Category.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putCategoryStatusCtrl;