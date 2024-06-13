const getSalesCtrl = require('../../controllers/saleCtrls/getSalesCtrl.js');

const getSalesHandler = async (req, res) => {

    try {
        const sales = await getSalesCtrl();

        res.status(200).send(sales);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getSalesHandler;