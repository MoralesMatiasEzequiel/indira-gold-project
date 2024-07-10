const getProductsRatingCtrl = require('../../controllers/productCtrls/getProductsRatingCtrl.js');

const getProductsRatingHandler = async (req, res) => {

    try {
        const productsRating = await getProductsRatingCtrl();

        res.status(200).send(productsRating);

    } catch (error) {
        res.status(500).send({ error: error.message});
    }
};

module.exports = getProductsRatingHandler;