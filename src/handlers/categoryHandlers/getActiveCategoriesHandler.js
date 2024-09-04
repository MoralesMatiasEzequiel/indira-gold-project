const getActiveCategoriesCtrl = require('../../controllers/categoryCtrls/getActiveCategoriesCtrl.js');


const getActiveCategoriesHandler = async (req, res) => {

    try {
        const activeCategories = await getActiveCategoriesCtrl();

        res.status(200).send(activeCategories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getActiveCategoriesHandler;