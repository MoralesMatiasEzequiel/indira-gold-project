const getCategoriesHandler = require('./getCategoryHandler.js')
const getActiveCategoriesHandler = require('./getActiveCategoriesHandler.js');
const postCategoryHandler = require('./postCategoryHandler.js');
const putCategoryHandler = require('./putCategoryHandler.js');
const putCategoryStatusHandler = require('./putCategoryStatusHandler.js');
const deleteCategoryHandler = require('./deleteCategoryHandler.js')


module.exports = {
    getCategoriesHandler,
    getActiveCategoriesHandler,
    postCategoryHandler,
    putCategoryHandler,
    putCategoryStatusHandler,
    deleteCategoryHandler
}