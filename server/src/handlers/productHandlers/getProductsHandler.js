const getProductsCtrl = require('../../controllers/productCtrls/getProductsCtrl.js');

const getProductsHandler = async (req, res) => {

    try {
        const products = await getProductsCtrl();

        res.status(200).send(products);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getProductsHandler;