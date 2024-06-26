const saleRouter = require('express').Router();
const { getSalesHandlers, getSaleByIdCtrl, postSaleHandlers } = require('../handlers/saleHandlers/indexHandlers.js');

saleRouter.get('/', getSalesHandlers);
saleRouter.get('/:id', getSaleByIdCtrl);
saleRouter.post('/', postSaleHandlers);

module.exports = saleRouter;