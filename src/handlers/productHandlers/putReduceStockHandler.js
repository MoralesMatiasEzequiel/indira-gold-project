const putReduceStockCtrl = require('../../controllers/productCtrls/putReduceStockCtrl.js');

const putReduceStockHandler = async (req, res) => {
  const { _id, idColor, idSize, stockToReduce } = req.body;
  try {
    if (!_id) {
      return res.status(400).json({ error: 'Missing ID' });
    }

    const productUpdate = await putReduceStockCtrl(_id, idColor, idSize, stockToReduce);
    
    if (!productUpdate.success) {
      return res.status(400).json({ error: productUpdate.message });
    }

    return res.status(200).json({ message: 'Stock reduced' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putReduceStockHandler;
