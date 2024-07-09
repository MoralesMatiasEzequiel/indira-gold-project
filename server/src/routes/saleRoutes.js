const saleRouter = require('express').Router();
const { getSalesHandlers, getSaleByIdHandler, getSaleByOrderNumberHandlers, getSaleByClientNameHandlers, getSalesOnlineHandlers, getSalesLocalHandlers, postSaleHandlers } = require('../handlers/saleHandlers/indexHandlers.js');

saleRouter.get('/', async (req, res) => {
    
    const { orderNumber, clientName } = req.query;

    if (orderNumber) {
        return getSaleByOrderNumberHandlers(req, res);
    };

    if (clientName) {
        return getSaleByClientNameHandlers(req, res);
    };

    return getSalesHandlers(req, res); 
});
saleRouter.get('/online', getSalesOnlineHandlers);
saleRouter.get('/local', getSalesLocalHandlers);
saleRouter.get('/:id', getSaleByIdHandler);
saleRouter.post('/', postSaleHandlers);

module.exports = saleRouter;