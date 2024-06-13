const getProductsAllCtrl = require('../../controllers/productCtrls/getProductsAllCtrl.js');

const getProductsAllHandler = async (req, res) => {

    try {
        const products = await getProductsAllCtrl();

        res.status(200).send(products);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getProductsAllHandler;