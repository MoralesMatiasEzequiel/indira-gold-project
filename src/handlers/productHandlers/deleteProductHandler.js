const deleteProductCtrl = require('../../controllers/productCtrls/deleteProductCtrl.js')

const deleteProductHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await deleteProductCtrl(id);

        res.status(200).send(`Product has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no product with this ID: ${_id}` });
    }
};

module.exports = deleteProductHandler;