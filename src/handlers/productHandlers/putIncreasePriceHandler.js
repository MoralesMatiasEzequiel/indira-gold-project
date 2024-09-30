const putIncreasePriceCtrl = require('../../controllers/productCtrls/putIncreasePriceCtrl.js');

const putIncreasePriceHandler = async (req, res) => {
    try {
        const { adjust, porcentage, products, category } = req.body;

        if (porcentage && typeof Number(porcentage) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType porcentage' });
        };

        const productsPriceUpdate = await putIncreasePriceCtrl( 
            adjust, 
            Number(porcentage), 
            products,
            category
        );

        return res.status(200).send('Product prices have been updated.');

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putIncreasePriceHandler;