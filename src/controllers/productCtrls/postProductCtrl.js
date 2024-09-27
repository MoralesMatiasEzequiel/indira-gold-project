const Product = require('../../collections/Product.js');

const postProductCtrl = async (name, color, supplier, price, category, description, imageGlobal) => {
    
  const newProduct = {
        name,
        color,
        supplier,
        price,
        category,
        description,
        imageGlobal: imageGlobal || null
  };
  
  const createdProduct = await Product.create(newProduct);

    return createdProduct;
};

module.exports = postProductCtrl;