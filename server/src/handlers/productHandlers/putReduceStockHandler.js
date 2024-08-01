const putReduceStockCtrl = require('../../controllers/productCtrls/putReduceStockCtrl.js');

const putReduceStockHandler = async (req, res) => {
    const { _id, idColor, idSize, stockToReduce } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });
      
      const productUpdate = await putReduceStockCtrl(_id, idColor, idSize, stockToReduce)
    
      return res.status(200).send(`Stock reduced`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putReduceStockHandler;