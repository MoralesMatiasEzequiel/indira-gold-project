const putDebtCtrl = require('../../controllers/debtCtrls/putDebtCtrl.js');

const putDebtHandler = async (req, res) => {

    const { _id, saleId, amount } = req.body;

    try {
        if (!_id) return res.status(400).json({ error: 'Missing ID' });

        if (typeof saleId !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType - saleId' });
          };
      
          if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).send({ error: 'Incorrect DataType - amount should be a positive number' });
          };

        const debtUpdate = await putDebtCtrl(_id, saleId, amount);

        return res.status(200).send(debtUpdate);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = putDebtHandler;