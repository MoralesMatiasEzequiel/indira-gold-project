const debtRouter = require('express').Router();
const { getDebtsHandler, getDebtByIdHandler, getDebtByOrderNumberHandler, postDebtHandler, getDebtByClientNameHandler, putDebtHandler, putDebtAmountHandler } = require('../handlers/debtHandlers/indexHandlers.js');

debtRouter.get('/', async (req, res) => {
    
    const { orderNumber, clientName } = req.query;

    if (orderNumber) {
        return getDebtByOrderNumberHandler(req, res);
    };

    if (clientName) {
        return getDebtByClientNameHandler(req, res);
    };

    return getDebtsHandler(req, res); 
});
debtRouter.get('/:id', getDebtByIdHandler);
debtRouter.post('/', postDebtHandler);
debtRouter.put('/', putDebtHandler);
debtRouter.put('/amount', putDebtAmountHandler);


module.exports = debtRouter;