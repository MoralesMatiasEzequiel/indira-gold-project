require('../../db.js');
const Product = require('../../collections/Product.js');

const putReduceStockCtrl = async (_id, idColor, idSize, stockToReduce) => {
  try {

    const product = await Product.findById(_id);
    if (!product) {
      throw new Error('Product not found');
    }

    const color = product.color.id(idColor);
    if (!color) {
      throw new Error('Color not found');
    }

    const size = color.size.id(idSize);
    if (!size) {
      throw new Error('Size not found');
    }

    if (size.stock < stockToReduce) {
      throw new Error('Insufficient stock available');
    }

    const newStock = size.stock - stockToReduce;

    size.stock = newStock;

    await product.save();

    return { success: true, message: 'Stock updated successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = putReduceStockCtrl;
