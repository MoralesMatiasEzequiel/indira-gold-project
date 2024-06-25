const Product = require('../../collections/Product.js');

const postProductCtrl = async (name, color, price, category) => {
  
    const newProduct = {
      name,
      color,
      price,
      category
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;