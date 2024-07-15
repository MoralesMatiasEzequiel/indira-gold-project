const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getProductByNameHandler, getSoldProductsHandler, getProductsRatingHandler, getProductColorsHandler, postProductHandler, putProductHandler, putProductStatusHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductByNameHandler(req, res);
    }

    return getProductsHandler(req, res); 
});

productRouter.get('/all', getProductsAllHandler);

productRouter.get('/sold', getSoldProductsHandler);

productRouter.get('/rating', getProductsRatingHandler);

productRouter.get('/colors', getProductColorsHandler);

productRouter.get('/:id', getProductByIdHandler);

productRouter.post('/', postProductHandler); 

productRouter.put('/', putProductHandler);

productRouter.put('/:id', putProductStatusHandler);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;