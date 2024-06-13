const getProductByIdCtrl = require('../../controllers/productCtrls/getProductByIdCtrl.js');

const getProductByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await getProductByIdCtrl(id);

        res.status(200).send(product);

    } catch (error) {
        res.status(400).send({ description: `There's no product with ID: ${id}` }); 
    }
};

module.exports = getProductByIdHandler;