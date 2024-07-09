const getSoldProductsCtrl = require('../../controllers/productCtrls/getSoldProductsCtrl.js');

const getSoldProductsHandler = async (req, res) => {

    try {
        const soldProducts = await getSoldProductsCtrl();

        res.status(200).send(soldProducts);

    } catch (error) {
        res.status(400).send({ description: `Error sold product` }); 
    }
};

module.exports = getSoldProductsHandler;