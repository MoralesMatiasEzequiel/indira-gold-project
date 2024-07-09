const getSalesOnlineCtrl = require('../../controllers/saleCtrls/getSalesLocalCtrl.js');

const getSalesLocalHandlers = async (req, res) => {

    try {
        const salesLocal = await getSalesOnlineCtrl();
// console.log(salesLocal);
        res.status(200).send(salesLocal);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getSalesLocalHandlers;