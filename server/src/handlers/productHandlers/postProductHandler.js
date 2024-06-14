const postProductCtrl = require('../../controllers/productCtrls/postProductCtrl.js');
const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');
const Product = require('../../collections/Product.js');

const postProductHandler = async (req, res) => {
  const { name, color, description, category } = req.body;

  try {
    if (!name || !color || !description || !category) {
      return res.status(400).send({ error: 'Missing data' });
    }
    if (
      typeof name !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - name' });
    }
    // if (color && !Array.isArray(color)) {
    //   return res.status(400).send({ error: 'Incorrect DataType - color' });
    // }
    
    if (typeof description !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - description' });
    }
    // if (category && !Array.isArray(category)) {
    //   return res.status(400).send({ error: 'Incorrect DataType - category' });
    // }

    let existingProduct = await Product.findOne({ name, active: false });

    if (existingProduct) {
      existingProduct.active = true;
      await existingProduct.save();
      const _id = existingProduct._id;
      await putProductCtrl(_id, name, color, description, category);
      return res.status(200).send(`The product ${existingProduct.name} has been reactivated and updated`);
    }

    const newProduct = await postProductCtrl(name, color, description, category);

    res.status(200).send(newProduct);

  } catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyPattern.name) {
      return res.status(409).send({ error: 'Product with the same name already exists' });
    }

    return res.status(500).send(error.message);
  }
};

module.exports = postProductHandler;