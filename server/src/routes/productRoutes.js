// const productRouter = Router();
// const { Router } = require('express');
const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getProductsSaleHandler, postProductHandler, putProductHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');


productRouter.get('/', async (req, res) => {
  return getProductsHandler(req, res);
});

productRouter.get('/all', async (req, res) => {
  return getProductsAllHandler(req, res);
});

productRouter.get('/:id', getProductByIdHandler);

productRouter.get('/sale', getProductsSaleHandler);

productRouter.post('/', postProductHandler); 

productRouter.put('/', putProductHandler);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;