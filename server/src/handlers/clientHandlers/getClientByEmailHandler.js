const getClientByEmailCtrl = require('../../controllers/clientCtrls/getClientByEmailCtrl.js');

const getClientByEmailHandler = async (req, res) => {
    const { email } = req.query;  

    try {
        const clientByEmail = await getClientByEmailCtrl(email);

        if (!clientByEmail) {
            return res.status(404).send(`No client found with email: "${email}"`);
        }

        res.status(200).send(clientByEmail);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByEmailHandler;