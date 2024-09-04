const getActiveSalesCtrl = require('../../controllers/saleCtrls/getActiveSalesCtrl.js');

const getActiveSalesHandler = async (req, res) => {

    try {
        const activeSales = await getActiveSalesCtrl();

        res.status(200).send(activeSales);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getActiveSalesHandler;