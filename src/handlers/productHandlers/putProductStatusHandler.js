const putProductStatusCtrl = require('../../controllers/productCtrls/putProductStatusCtrl.js');

const putProductStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const productUpdate = await putProductStatusCtrl(id)
    
      return res.status(200).send(`The product changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putProductStatusHandler;