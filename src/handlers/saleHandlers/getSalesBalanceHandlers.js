const getSalesBalanceCtrl = require('../../controllers/saleCtrls/getSalesBalanceCtrl.js');

const getSalesBalanceHandlers = async (req, res) => {

    try {
        const salesBalance = await getSalesBalanceCtrl();

        res.status(200).send(salesBalance);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getSalesBalanceHandlers;