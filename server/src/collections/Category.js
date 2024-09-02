const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  active: {
    type: Boolean,
    default: true
  }
});

const Category = model('Category', categorySchema);

module.exports = Category;