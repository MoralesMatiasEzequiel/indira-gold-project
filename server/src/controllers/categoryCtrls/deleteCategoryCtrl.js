require('../../db.js');
const Category = require('../../collections/Category.js');
const mongoose = require('mongoose');

const deleteCategoryCtrl = async (_id) => {
  let id;
  
  try {
    id = mongoose.Types.ObjectId(_id);
  } catch (error) {
    throw new Error(`Invalid _id: ${_id}`);
  }

  const deleted = await Category.deleteOne({ _id: id });

  return deleted;
};

module.exports = deleteCategoryCtrl;