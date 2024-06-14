const categoryRouter = require('express').Router();
const { categoryEnum } = require('../collections/Category.js');

const { getCategoriesHandler, postCategoryHandler, putCategoryHandler, deleteCategoryHandler, } = require('../handlers/categoryHandlers/indexHandlers.js');


categoryRouter.get('/', getCategoriesHandler);

categoryRouter.post('/', postCategoryHandler);

categoryRouter.put('/', putCategoryHandler);

categoryRouter.delete('/:_id', deleteCategoryHandler);

categoryRouter.get('/categoryEnum', (req, res) => {res.json(categoryEnum);}); // ???

module.exports = categoryRouter;