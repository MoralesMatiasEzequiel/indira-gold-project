const getMonthlySalesByClientCtrl = require('../../controllers/saleCtrls/getMonthlySalesByClientCtrl');

const getMonthlySalesByClientHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const productsPurchased = await getMonthlySalesByClientCtrl(id);

        if (!productsPurchased) {
            return res.status(404).send(`No sale found with ID: "${id}"`);
        }

        res.status(200).send(productsPurchased);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getMonthlySalesByClientHandler;