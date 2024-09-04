require('../../db.js');
const Category = require('../../collections/Category.js');

const getActiveCategoriesCtrl = async () => {
    const activeCategories = await Category.find({active: true});

    return activeCategories;
};

module.exports = getActiveCategoriesCtrl;