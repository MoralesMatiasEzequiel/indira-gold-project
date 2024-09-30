const postProductCtrl = require('../../controllers/productCtrls/postProductCtrl.js');

const postProductHandler = async (req, res) => {
    const { name, color, supplier, price, salePrice, category, description, imageGlobal } = req.body;

    try {
        if (!name || !color || !price || !category) {
            return res.status(400).send({ error: 'Missing data' });
        };

        if (typeof name !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType - name' });
        }

        if (typeof price !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType - price' });
        }

        if (salePrice && typeof Number(salePrice) !== 'number') {
            return res.status(400).send({ error: 'Incorrect DataType salePrice' });
        }

        if (description && typeof description !== 'string') {
            return res.status(400).send({ error: 'Incorrect DataType description' });
        }

        const newProduct = await postProductCtrl(name, color, supplier, price, category, description, imageGlobal);
        res.status(200).send(newProduct);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = postProductHandler;