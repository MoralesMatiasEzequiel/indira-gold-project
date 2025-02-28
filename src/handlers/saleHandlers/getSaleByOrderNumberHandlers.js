const getSaleByOrderNumberCtrl = require('../../controllers/saleCtrls/getSaleByOrderNumberCtrl.js');

const getSaleByOrderNumberHandlers = async (req, res) => {

    const { orderNumber } = req.query;

    try {
        const sale = await getSaleByOrderNumberCtrl(orderNumber);

        if (!sale) {
            return res.status(404).send(`No sales found with this order number: "${orderNumber}"`);
        }

        res.status(200).send(sale);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getSaleByOrderNumberHandlers;