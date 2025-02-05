const debtRouter = require('express').Router();
const { getDebtsHandler, getDebtByIdHandler, postDebtHandler, putDebtHandler, putDebtAmountHandler } = require('../handlers/debtHandlers/indexHandlers.js');

debtRouter.get('/:id', getDebtByIdHandler);
debtRouter.get('/', getDebtsHandler);
debtRouter.post('/', postDebtHandler);
debtRouter.put('/', putDebtHandler);
debtRouter.put('/amount', putDebtAmountHandler);


module.exports = debtRouter;