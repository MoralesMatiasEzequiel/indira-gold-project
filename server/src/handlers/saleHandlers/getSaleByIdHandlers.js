const getSaleByIdCtrl = require('../../controllers/saleCtrls/getSaleByIdCtrl.js');

const getSaleByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const sale = await getSaleByIdCtrl(id);

        if (!sale) {
            return res.status(404).send(`No sale found with ID: "${id}"`);
        }

        res.status(200).send(sale);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getSaleByIdHandler;