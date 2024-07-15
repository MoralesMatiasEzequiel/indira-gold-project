const getProductColorsCtrl = require('../../controllers/productCtrls/getProductColorsCtrl.js');

const getProductColorsHandler = async (req, res) => {

    try {
        const productColors = await getProductColorsCtrl();

        res.status(200).send(productColors);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getProductColorsHandler;