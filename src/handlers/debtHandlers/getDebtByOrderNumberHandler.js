const getDebtByOrderNumberCtrl = require('../../controllers/debtCtrls/getDebtByOrderNumberCtrl.js');

const getDebtByOrderNumberHandlers = async (req, res) => {

    const { orderNumber } = req.query;

    try {
        const debt = await getDebtByOrderNumberCtrl(orderNumber);

        if (!debt) {
            return res.status(404).send(`No debts found with this order number: "${orderNumber}"`);
        }

        res.status(200).send(debt);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getDebtByOrderNumberHandlers;