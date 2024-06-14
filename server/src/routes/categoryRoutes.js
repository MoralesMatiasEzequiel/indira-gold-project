const categoryRouter = require('express').Router();
const { getCategoriesHandler, postCategoryHandler, putCategoryHandler, deleteCategoryHandler, } = require('../handlers/categoryHandlers/indexHandlers.js');


categoryRouter.get('/', getCategoriesHandler);

categoryRouter.post('/', postCategoryHandler);

categoryRouter.put('/', putCategoryHandler);

categoryRouter.delete('/:_id', deleteCategoryHandler);


module.exports = categoryRouter;