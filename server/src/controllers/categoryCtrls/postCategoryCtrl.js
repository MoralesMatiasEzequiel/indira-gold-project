require('../../db.js');
const Category = require('../../collections/Category.js');

const postCategoryCtrl = async (name) => {
  
    const category = {
      name
    };

    const newCategory = await Category.create(category);

    return newCategory;
};

module.exports = postCategoryCtrl;