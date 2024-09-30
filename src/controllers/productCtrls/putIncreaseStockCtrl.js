require('../../db.js');
const Product = require('../../collections/Product.js');

const putIncreaseStockCtrl = async (_id, idColor, idSize, stockToIncrease) => {
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

    const newStock = size.stock + stockToIncrease;

    size.stock = newStock;

    await product.save();

    return { success: true, message: 'Stock updated successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = putIncreaseStockCtrl;