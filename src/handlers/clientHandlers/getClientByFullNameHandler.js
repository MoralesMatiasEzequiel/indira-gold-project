const getClientByFullNameCtrl = require('../../controllers/clientCtrls/getClientByFullNameCtrl.js');

const getClientByFullNameHandler = async (req, res) => {
    const { fullName } = req.query;  

    try {
        const clientByFullName = await getClientByFullNameCtrl(fullName);

        if (clientByFullName.length === 0) {
            // return res.status(404).send(`No client found with name: "${name}"`);
            return res.status(200).send([]);
        }

        res.status(200).send(clientByFullName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByFullNameHandler;