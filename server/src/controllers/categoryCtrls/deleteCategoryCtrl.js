require('../../db.js');
const Category = require('../../collections/Category.js');

const deleteCategoryCtrl = async (_id) => {

  const deleted = await Category.deleteOne({_id});

  return deleted;
};

module.exports = deleteCategoryCtrl;