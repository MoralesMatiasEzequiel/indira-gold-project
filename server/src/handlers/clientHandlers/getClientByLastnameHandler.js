const getClientByLastnameCtrl = require('../../controllers/clientCtrls/getClientByLastnameCtrl.js');

const getClientByNameHandler = async (req, res) => {
    const { lastname } = req.query;  

    try {
        const clientByLastname = await getClientByLastnameCtrl(lastname);

        if (clientByLastname.length === 0) {
            // return res.status(404).send(`No client found with lastname: "${lastname}"`);
            return res.status(200).send([]);
        }

        res.status(200).send(clientByLastname);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByNameHandler;