const Product = require('../../collections/Product.js');

const postProductCtrl = async (name, color, supplier, price, category, description, imageGlobalPath) => {
    
  const newProduct = {
        name,
        color,
        supplier,
        price,
        category,
        description,
        imageGlobal: imageGlobalPath || null
  };
  
  const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;