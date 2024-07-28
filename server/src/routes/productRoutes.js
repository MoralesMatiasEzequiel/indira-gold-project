const productRouter = require('express').Router();
const { getProductsHandler, getProductsAllHandler, getProductByIdHandler, getProductByNameHandler, getSoldProductsHandler, getProductsRatingHandler, getProductColorsHandler, postProductHandler, putProductHandler, putProductStatusHandler, deleteProductHandler } = require('../handlers/productHandlers/indexHandlers.js');
const upload = require('../config/uploadConfig.js');

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

productRouter.post('/', upload.array('images', 10), postProductHandler);   //'upload.array('images', 10)' Este middleware procesa la subida de hasta 10 archivos bajo el campo images. Puedes ajustar este número según tus necesidades.

productRouter.put('/', putProductHandler);

productRouter.put('/:id', putProductStatusHandler);

productRouter.delete('/:id', deleteProductHandler);


module.exports = productRouter;