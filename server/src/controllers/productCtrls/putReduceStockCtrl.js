require('../../db.js');
const Product = require('../../collections/Product.js');

const putReduceStockCtrl = async (_id, idColor, idSize, stockToReduce) => {
  try {
    // Encuentra el producto por su ID
    const product = await Product.findById(_id);
    if (!product) {
      throw new Error('Product not found');
    }

    // Encuentra el color específico dentro del producto
    const color = product.color.id(idColor);
    if (!color) {
      throw new Error('Color not found');
    }

    // Encuentra la talla específica dentro del color
    const size = color.size.id(idSize);
    if (!size) {
      throw new Error('Size not found');
    }

    // Verifica si hay suficiente stock
    if (size.stock < stockToReduce) {
      throw new Error('Insufficient stock available');
    }

    // Calcula el nuevo stock
    const newStock = size.stock - stockToReduce;

    // Actualiza el stock
    size.stock = newStock;

    // Guarda los cambios
    await product.save();

    return { success: true, message: 'Stock updated successfully' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = putReduceStockCtrl;
