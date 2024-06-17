const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');

const putProductHandler = async (req, res) => {
    const { _id, name, color, description, category } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (color && !Array.isArray(color)) ||
        (description && typeof description !== 'string') ||
        (category && !Array.isArray(category))
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const productUpdate = await putProductCtrl(_id, name, color, description, category)
    
      return res.status(200).send(`Product had been updated`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putProductHandler;