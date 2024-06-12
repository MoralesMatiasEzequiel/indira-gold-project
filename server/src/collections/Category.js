const { Schema, model } = require('mongoose');

const categoryEnum = ['Remeras', 'Pantalones', 'Buzos', 'Calzones'];

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  categories: {
    type: [{
      type: String,
      enum: categoryEnum
    }],
    required: true
  }
});

const Category = model('Category', categorySchema);

module.exports = { Category, categoryEnum };