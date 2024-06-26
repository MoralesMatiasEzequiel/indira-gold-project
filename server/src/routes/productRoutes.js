const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getProductByNameHandler, getProductsSaleHandler, postProductHandler, putProductHandler, putProductStatusCtrl, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');

productRouter.get('/', async (req, res) => {
    
    const { name } = req.query;

    if (name) {
        return getProductByNameHandler(req, res);
    }

    return getProductsHandler(req, res); 
});

productRouter.get('/all', getProductsAllHandler);

productRouter.get('/:id', getProductByIdHandler);

productRouter.get('/sale', getProductsSaleHandler);

productRouter.post('/', postProductHandler); 

productRouter.put('/', putProductHandler);

productRouter.put('/:id', putProductStatusCtrl);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;