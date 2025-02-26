const putDebtStatusCtrl = require('../../controllers/debtCtrls/putDebtStatusCtrl.js');

const putDebtStatusHandler = async (req, res) => {
    const { id } = req.params;
    try {
      if(!id) res.status(400).json({ error: 'Missing ID' });
      
      const debtUpdate = await putDebtStatusCtrl(id)
    
      return res.status(200).send(`The debt changed its status`);

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putDebtStatusHandler;