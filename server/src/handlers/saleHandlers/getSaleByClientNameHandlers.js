const getSaleByClientNameCtrl = require('../../controllers/saleCtrls/getSaleByClientNameCtrl');

const getSaleByClientNameHandlers = async (req, res) => {

    const { clientName } = req.query;
    
    try {
        const sale = await getSaleByClientNameCtrl(clientName);
        if (!sale) {
            return res.status(404).send(`No sales were found with the following customer name: "${clientName}"`);
        }

        res.status(200).send(sale);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getSaleByClientNameHandlers;