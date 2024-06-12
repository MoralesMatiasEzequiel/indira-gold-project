const Product = require('../../collections/Product.js');

const postProductCtrl = async (name, color, description, category) => {
  
    const newProduct = {
      name,
      color,
      description,
      category
    }

    const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;