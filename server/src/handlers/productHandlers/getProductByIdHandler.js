const getProductByIdCtrl = require('../../controllers/productCtrls/getProductByIdCtrl.js');

const getProductByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const productById = await getProductByIdCtrl(id);

        if (!productById) {
            return res.status(404).send(`No product found with ID: "${id}"`);
        }

        res.status(200).send(productById);

    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

module.exports = getProductByIdHandler;