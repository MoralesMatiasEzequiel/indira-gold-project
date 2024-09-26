const deleteSaleCtrl = require('../../controllers/saleCtrls/deleteSaleCtrl.js');

const deleteSaleHandler = async (req, res) => {
    console.log("req");
    
    const { id } = req.params;

    try {
        const deleted = await deleteSaleCtrl(id);

        res.status(200).send(`Sale has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no sale with this ID: ${_id}` });
    }
};

module.exports = deleteSaleHandler;