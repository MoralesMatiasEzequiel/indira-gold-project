const getSalesOnlineCtrl = require('../../controllers/saleCtrls/getSalesOnlineCtrl.js');

const getSalesOnlineHandlers = async (req, res) => {

    try {
        const salesOnline = await getSalesOnlineCtrl();

        res.status(200).send(salesOnline);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getSalesOnlineHandlers;