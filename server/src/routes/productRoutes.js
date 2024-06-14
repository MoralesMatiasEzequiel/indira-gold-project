// const productRouter = Router();
// const { Router } = require('express');
const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getProductsSaleHandler, postProductHandler, putProductHandler, putProductStatusCtrl, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');


productRouter.get('/', getProductsHandler);

productRouter.get('/all', getProductsAllHandler);

productRouter.get('/:id', getProductByIdHandler);

productRouter.get('/sale', getProductsSaleHandler);

productRouter.post('/', postProductHandler); 

productRouter.put('/', putProductHandler);

productRouter.put('/:id', putProductStatusCtrl);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;