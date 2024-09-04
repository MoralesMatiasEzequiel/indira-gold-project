const getClientsCtrl = require('../../controllers/clientCtrls/getClientsCtrl');


const getClientsHandler = async (req, res) => {
    try {
        const clients = await getClientsCtrl();

        res.status(200).send(clients);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getClientsHandler;