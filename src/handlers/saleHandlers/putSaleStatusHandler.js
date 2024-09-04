const putSaleStatusCtrl = require('../../controllers/saleCtrls/putSaleStatusCtrl.js');

const putSaleStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const saleUpdate = await putSaleStatusCtrl(id)
    
      return res.status(200).send(`The sale changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putSaleStatusHandler;