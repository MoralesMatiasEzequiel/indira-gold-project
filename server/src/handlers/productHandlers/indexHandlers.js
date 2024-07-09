const getProductsHandler = require('./getProductsHandler.js');
const getProductsAllHandler = require('./getProductsAllHandler.js');
const getProductByIdHandler = require('./getProductByIdHandler.js');
const getProductByNameHandler = require('./getProductByNameHandler.js')
const getSoldProductsHandler = require('./getSoldProductsHandler.js');
const postProductHandler = require('./postProductHandler.js');
const putProductHandler = require('./putProductHandler.js');
const putProductStatusCtrl = require('./putProductStatusHandler.js')
const deleteProductHandler = require('./deleteProductHandler.js');


module.exports = {
    getProductsHandler,
    getProductsAllHandler,
    getProductByIdHandler,
    getProductByNameHandler,
    getSoldProductsHandler,
    postProductHandler,
    putProductHandler,
    putProductStatusCtrl,
    deleteProductHandler
}