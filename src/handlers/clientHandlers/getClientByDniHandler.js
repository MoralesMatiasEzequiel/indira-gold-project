const getClientByDniCtrl = require('../../controllers/clientCtrls/getClientByDniCtrl.js');

const getClientByDniHandler = async (req, res) => {
    const { dni } = req.query;  

    try {
        const clientByDni = await getClientByDniCtrl(dni);

        if (!clientByDni) {
            return res.status(404).send(`No client found with dni: "${dni}"`);
        }

        res.status(200).send(clientByDni);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByDniHandler;