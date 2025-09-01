const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl.js');

const putProductHandler = async (req, res) => {
    const { _id, name, color, supplier, price, salePrice, description, category, active, imageGlobal } = req.body;

    try {
        if (!_id) return res.status(400).json({ error: 'Missing ID' });

        if (name && typeof name !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType name' });
        };

        if (price && typeof Number(price) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType price' });
        }

        if (salePrice && typeof Number(salePrice) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType salePrice' });
        }

        if (description && typeof description !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType description' });
        }

        const productUpdate = await putProductCtrl(
            _id, 
            name, 
            color, 
            supplier, 
            price,
            salePrice,
            category, 
            description, 
            active,
            imageGlobal
        );

        return res.status(200).send('Product has been updated');

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = putProductHandler;