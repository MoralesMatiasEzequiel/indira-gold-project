const deleteCategoryCtrl = require('../../controllers/categoryCtrls/deleteCategoryCtrl.js');

const deleteCategoryHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteCategoryCtrl(_id);

        res.status(200).send(`Category has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no category with ID: ${_id}` });
    }
};

module.exports = deleteCategoryHandler;