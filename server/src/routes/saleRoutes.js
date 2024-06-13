const saleRouter = require('express').Router();
const { getSalesHandlers, postSaleHandlers } = require('../handlers/saleHandlers/indexHandlers.js');

saleRouter.get('/', getSalesHandlers);

saleRouter.post('/', postSaleHandlers);

module.exports = saleRouter;