const getActiveProductsByNameCtrl = require('../../controllers/productCtrls/getActiveProductsByNameCtrl.js');

const getActiveProductsByNameHandler = async (req, res) => {

    const { name } = req.query;

    try {
        const product = await getActiveProductsByNameCtrl(name);

        if (!product) {
            return res.status(404).send(`No product found with name: "${name}"`);
        };

        res.status(200).send(product);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getActiveProductsByNameHandler;