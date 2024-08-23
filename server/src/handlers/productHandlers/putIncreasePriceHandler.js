const putIncreasePriceCtrl = require('../../controllers/productCtrls/putIncreasePriceCtrl.js');

const putIncreasePriceHandler = async (req, res) => {
    try {
        const { porcentage, category } = req.body;

        if (porcentage && typeof Number(porcentage) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType porcentage' });
        };
        // if (category && !Array.isArray(JSON.parse(category))) {
        //     return res.status(400).send({ error: 'Incorrect DataType category' });
        // };

        const productsPriceUpdate = await putIncreasePriceCtrl( 
            Number(porcentage), 
            category
        );

        return res.status(200).send('Product prices have been updated.');

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putIncreasePriceHandler;