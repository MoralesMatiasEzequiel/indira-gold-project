const Product = require('../../collections/Product.js');

const postProductCtrl = async (name, color, price, category, imageGlobal, description) => {
  
    const newProduct = {
      name,
      color,
      price,
      category,
      imageGlobal,
      description
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;