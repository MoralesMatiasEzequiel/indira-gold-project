const saleRouter = require('express').Router();
const { getSalesHandlers, getActiveSalesHandler, getSaleByIdHandler, getSaleByOrderNumberHandlers, getSaleByClientNameHandlers, getSalesOnlineHandlers, getSalesLocalHandlers, getSalesBalanceHandlers, getSalesAnnualBalanceHandler, getMonthlySalesByClientHandler, getYearsOfSalesHandler, postSaleHandlers, putSaleStatusHandler, putSaleHandler, deleteSaleHandler } = require('../handlers/saleHandlers/indexHandlers.js');

saleRouter.get('/', async (req, res) => {
    
    const { orderNumber, clientName, year } = req.query;

    if (orderNumber) {
        return getSaleByOrderNumberHandlers(req, res);
    };

    if (clientName) {
        return getSaleByClientNameHandlers(req, res);
    };

    if (year) {
        return getSalesAnnualBalanceHandler(req, res);
    };

    return getActiveSalesHandler(req, res); 
});
saleRouter.get('/online', getSalesOnlineHandlers);
saleRouter.get('/active', getActiveSalesHandler);
saleRouter.get('/local', getSalesLocalHandlers);
saleRouter.get('/balance', getSalesBalanceHandlers);
saleRouter.get('/years', getYearsOfSalesHandler);
saleRouter.get('/monthlyByClient/:id', getMonthlySalesByClientHandler);
saleRouter.get('/:id', getSaleByIdHandler);
saleRouter.post('/', postSaleHandlers);
saleRouter.put('/', putSaleHandler);
saleRouter.put('/deactive/:id', putSaleStatusHandler);
saleRouter.delete('/:id', deleteSaleHandler);

module.exports = saleRouter;