const getCategoriesCtrl = require('../../controllers/categoryCtrls/getCategoryCtrl.js');


const getCategoriesHandler = async (req, res) => {

    try {
        const categories = await getCategoriesCtrl();

        res.status(200).send(categories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getCategoriesHandler;