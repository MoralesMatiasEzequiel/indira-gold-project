const debtRouter = require('express').Router();
const { getDebtsHandler, getActiveDebtsHandler, getDebtByIdHandler, getDebtByOrderNumberHandler, postDebtHandler, getDebtByClientNameHandler, getDebtsByMonthAndYearHandler, putDebtHandler, putDebtAmountHandler, putDebtStatusHandler } = require('../handlers/debtHandlers/indexHandlers.js');

debtRouter.get('/', async (req, res) => {
    
    const { orderNumber, clientName } = req.query;

    if (orderNumber) {
        return getDebtByOrderNumberHandler(req, res);
    };

    if (clientName) {
        return getDebtByClientNameHandler(req, res);
    };

    return getActiveDebtsHandler(req, res); 
});
debtRouter.get('/all', getDebtsHandler);
debtRouter.get('/filtered', getDebtsByMonthAndYearHandler);
debtRouter.get('/:id', getDebtByIdHandler);
debtRouter.post('/', postDebtHandler);
debtRouter.put('/', putDebtHandler);
debtRouter.put('/amount', putDebtAmountHandler);
debtRouter.put('/:id', putDebtStatusHandler);

module.exports = debtRouter;