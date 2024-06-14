const postCategoryCtrl = require('../../controllers/categoryCtrls/postCategoryCtrl.js');

const postCategoryHandler = async (req, res) => {

    // const { name, categories } = req.body;
    const { name } = req.body;


    try {
        
        // if(!name || !categories || categories.length === 0){
        //     return res.status(400).send({ error: 'Missing data' });
        // }

        // if (
        //     typeof name !== 'string' ||
        //     !Array.isArray(categories)
        // ){
        //     return res.status(400).send({ error: 'Incorrect DataType' });
        // }

        if(!name){
            return res.status(400).send({ error: 'Missing name' });
        }

        if (typeof name !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType' });
        }

        const newCategory = await postCategoryCtrl(name);
        // const newCategory = await postCategoryCtrl(name, categories);

        res.status(200).json(newCategory);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postCategoryHandler;