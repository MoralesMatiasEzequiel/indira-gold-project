require('../../db.js');
const Category = require('../../collections/Category.js');

const getCategoriesCtrl = async () => {
    const categories = await Category.find();

    return categories;
};

module.exports = getCategoriesCtrl;