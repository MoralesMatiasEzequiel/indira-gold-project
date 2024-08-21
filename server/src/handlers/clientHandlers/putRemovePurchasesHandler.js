const putRemovePurchasesCtrl = require('../../controllers/clientCtrls/putRemovePurchasesCtrl.js');

const putRemovePurchasesHandler = async (req, res) => {
    const { _id, purchasesToRemove } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if(purchasesToRemove && !Array.isArray(purchasesToRemove)){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const userUpdate = await putRemovePurchasesCtrl(_id, purchasesToRemove)
    
      res.status(200).send(`The purchases has been deleted`);

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
};

module.exports = putRemovePurchasesHandler;