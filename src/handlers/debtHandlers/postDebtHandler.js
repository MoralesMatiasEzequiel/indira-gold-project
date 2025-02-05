const postDebtCtrl = require('../../controllers/debtCtrls/postDebtCtrl.js');

const postDebtHandler = async (req, res) => {

  const { saleId, amount } = req.body;

  try {
    if (!saleId || amount == null) {
      return res.status(400).send({ error: 'Missing data' });
    };

    if (typeof saleId !== 'string') {
      return res.status(400).send({ error: 'Incorrect DataType - saleId' });
    };

    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).send({ error: 'Incorrect DataType - amount should be a positive number' });
    };

    const newDebt = await postDebtCtrl(saleId, amount);

    res.status(200).send(newDebt);

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = postDebtHandler;