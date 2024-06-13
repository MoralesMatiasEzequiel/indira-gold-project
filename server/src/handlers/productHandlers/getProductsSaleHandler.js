const getProductsSaleCtrl = require('../../controllers/productCtrls/getProductsSaleCtrl.js');

const getProductsSaleHandler = async (req, res) => {

    try {
        const productsSale = await getProductsSaleCtrl();

        res.status(200).send(productsSale);

    } catch (error) {
        res.status(400).send({ description: `Error product sale` }); 
    }
};

module.exports = getProductsSaleHandler;