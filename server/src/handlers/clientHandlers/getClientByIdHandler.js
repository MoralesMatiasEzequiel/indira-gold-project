const getClientByIdCtrl = require('../../controllers/clientCtrls/getClientByIdCtrl');

const getClientByIdHandler = async (req, res) => {
    const { _id } = req.query;  

    try {
        const clientByID = await getClientByIdCtrl(_id);

        if (!clientByID) {
            return res.status(404).send(`No client found with ID: "${_id}"`);
        }

        res.status(200).send(clientByID);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getClientByIdHandler;