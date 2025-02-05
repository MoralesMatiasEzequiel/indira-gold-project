const putDebtAmountCtrl = require('../../controllers/debtCtrls/putDebtAmountCtrl');

const putDebtAmountHandler = async (req, res) => {

    const { _id, saleId, amount, incomeId } = req.body;

    try {
        if (!_id) return res.status(400).json({ error: 'Missing Debt ID' });

        if (!incomeId) return res.status(400).json({ error: 'Missing Income ID' });

        if (typeof saleId !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType - saleId' });
        };
      
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).send({ error: 'Incorrect DataType - amount should be a positive number' });
        };

        const updatedDebt = await putDebtAmountCtrl(_id, saleId, amount, incomeId);

        return res.status(200).json(updatedDebt);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putDebtAmountHandler;
