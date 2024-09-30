const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getActiveProductsByNameHandler, getProductByNameHandler, getSoldProductsHandler, getProductsRatingHandler, getProductColorsHandler, postProductHandler, putProductHandler, putReduceStockHandler, putIncreaseStockHandler, putIncreasePriceHandler, putProductStatusHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
       return getActiveProductsByNameHandler(req, res);
     }

     return getProductsHandler(req, res); 
});

productRouter.get('/all', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductByNameHandler(req, res);
    }

    return getProductsAllHandler(req, res); 
});

productRouter.get('/sold', getSoldProductsHandler);

productRouter.get('/rating', getProductsRatingHandler);

productRouter.get('/colors', getProductColorsHandler);

productRouter.get('/:id', getProductByIdHandler);

productRouter.post('/', postProductHandler);

productRouter.put('/', putProductHandler);

productRouter.put('/reduce', putReduceStockHandler);

productRouter.put('/increase', putIncreaseStockHandler);

productRouter.put('/increasePrice', putIncreasePriceHandler);

productRouter.put('/:id', putProductStatusHandler);

productRouter.delete('/:id', deleteProductHandler);

module.exports = productRouter;