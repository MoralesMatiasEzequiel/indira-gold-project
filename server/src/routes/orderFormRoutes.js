const { Router } = require('express');
const { getOrdersHandler, postOrdersHandler } = require('../handlers/orderHandlers/indexHandlers');


const orderFormRouter = Router();

orderFormRouter.get('/', getOrdersHandler);

orderFormRouter.post('/', postOrdersHandler);

module.exports = orderFormRouter;