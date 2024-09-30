const putIncreaseStockCtrl = require('../../controllers/productCtrls/putIncreaseStockCtrl.js');

const putIncreaseStockHandler = async (req, res) => {
  const { _id, idColor, idSize, stockToIncrease } = req.body;
  try {
    if (!_id) {
      return res.status(400).json({ error: 'Missing ID' });
    }
    const productUpdate = await putIncreaseStockCtrl(_id, idColor, idSize, stockToIncrease);
    
    if (!productUpdate.success) {
      return res.status(400).json({ error: productUpdate.message });
    }

    return res.status(200).json({ message: 'Stock increased' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putIncreaseStockHandler;
