const getDebtByClientNameCtrl = require('../../controllers/debtCtrls/getDebtByClientNameCtrl.js');

const getDebtByClientNameHandler = async (req, res) => {

    const { clientName } = req.query;
    
    try {
        const debt = await getDebtByClientNameCtrl(clientName);
        if (!debt) {
            return res.status(404).send(`No debts were found with the following customer name: "${clientName}"`);
        }

        res.status(200).send(debt);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getDebtByClientNameHandler;