const getActiveDebtsCtrl = require('../../controllers/debtCtrls/getActiveDebtsCtrl.js');

const getActiveDebtsHandler = async (req, res) => {

    try {
        const activeDebts = await getActiveDebtsCtrl();

        res.status(200).send(activeDebts);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getActiveDebtsHandler;