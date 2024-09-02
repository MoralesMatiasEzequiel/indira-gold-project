const categoryRouter = require('express').Router();
const { getCategoriesHandler, postCategoryHandler, putCategoryHandler, putCategoryStatusHandler, deleteCategoryHandler, } = require('../handlers/categoryHandlers/indexHandlers.js');


categoryRouter.get('/', getCategoriesHandler);

categoryRouter.post('/', postCategoryHandler);

categoryRouter.put('/', putCategoryHandler);

categoryRouter.delete('/:_id', deleteCategoryHandler);

categoryRouter.put('/deactive/:id', putCategoryStatusHandler);

module.exports = categoryRouter;