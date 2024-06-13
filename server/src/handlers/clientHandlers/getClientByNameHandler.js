const getClientByNameCtrl = require('../../controllers/clientCtrls/getClientByNameCtrl.js');

const getClientByNameHandler = async (req, res) => {
    const { name } = req.query;  

    try {
        const clientByName = await getClientByNameCtrl(name);

        if (clientByName.length === 0) {
            return res.status(404).send(`No client found with name: "${name}"`);
        }

        res.status(200).send(clientByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByNameHandler;