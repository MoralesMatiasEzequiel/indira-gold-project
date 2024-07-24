const saleRouter = require('express').Router();
const { getSalesHandlers, getActiveSalesHandler, getSaleByIdHandler, getSaleByOrderNumberHandlers, getSaleByClientNameHandlers, getSalesOnlineHandlers, getSalesLocalHandlers, getSalesBalanceHandlers, postSaleHandlers, putSaleStatusHandler } = require('../handlers/saleHandlers/indexHandlers.js');

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
saleRouter.get('/active', getActiveSalesHandler);
saleRouter.get('/local', getSalesLocalHandlers);
saleRouter.get('/balance', getSalesBalanceHandlers);
saleRouter.get('/:id', getSaleByIdHandler);
saleRouter.post('/', postSaleHandlers);
saleRouter.put('/deactive/:id', putSaleStatusHandler);

module.exports = saleRouter;