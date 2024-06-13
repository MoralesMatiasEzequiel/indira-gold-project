const deleteClientCtrl = require('../../controllers/clientCtrls/deleteClientCtrl.js');

const deleteClientHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteClientCtrl(_id);

        res.status(200).send(`Client has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no client with ID: ${_id}` }) 
    }
};

module.exports = deleteClientHandler;