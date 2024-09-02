const categoryRouter = require('express').Router();
const { getCategoriesHandler, getActiveCategoriesHandler, postCategoryHandler, putCategoryHandler, putCategoryStatusHandler, deleteCategoryHandler, } = require('../handlers/categoryHandlers/indexHandlers.js');


categoryRouter.get('/', getCategoriesHandler);

categoryRouter.get('/onlyActives', getActiveCategoriesHandler);

categoryRouter.post('/', postCategoryHandler);

categoryRouter.put('/', putCategoryHandler);

categoryRouter.delete('/:_id', deleteCategoryHandler);

categoryRouter.put('/deactive/:id', putCategoryStatusHandler);

module.exports = categoryRouter;