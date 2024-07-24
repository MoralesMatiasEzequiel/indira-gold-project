const getSalesHandlers = require('./getSalesHandlers.js');
const getActiveSalesHandler = require('./getActiveSalesHandler.js');
const getSaleByIdHandler = require('./getSaleByIdHandlers.js');
const getSaleByOrderNumberHandlers = require('./getSaleByOrderNumberHandlers.js');
const getSaleByClientNameHandlers = require('./getSaleByClientNameHandlers.js');
const getSalesOnlineHandlers = require('./getSalesOnlineHandlers.js');
const getSalesLocalHandlers = require('./getSalesLocalHandlers.js');
const getSalesBalanceHandlers = require('./getSalesBalanceHandlers.js');
const postSaleHandlers = require('./postSaleHandlers.js');
const putSaleStatusHandler = require('./putSaleStatusHandler.js');



module.exports = {
    getSalesHandlers,
    getActiveSalesHandler,
    getSaleByIdHandler,
    getSaleByOrderNumberHandlers,
    getSaleByClientNameHandlers,
    getSalesOnlineHandlers,
    getSalesLocalHandlers,
    getSalesBalanceHandlers,
    postSaleHandlers,
    putSaleStatusHandler
};