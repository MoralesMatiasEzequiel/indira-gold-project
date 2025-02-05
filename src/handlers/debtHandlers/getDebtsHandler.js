const getDebtsCtrl = require('../../controllers/debtCtrls/getDebtsCtrl.js');

const getDebtsHandler = async (req, res) => {

    try {
        const debts = await getDebtsCtrl();

        res.status(200).send(debts);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getDebtsHandler;