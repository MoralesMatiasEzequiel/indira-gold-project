const getSalesHandlers = require('./getSalesHandlers.js');
const getActiveSalesHandler = require('./getActiveSalesHandler.js');
const getSaleByIdHandler = require('./getSaleByIdHandlers.js');
const getSaleByOrderNumberHandlers = require('./getSaleByOrderNumberHandlers.js');
const getSaleByClientNameHandlers = require('./getSaleByClientNameHandlers.js');
const getSalesOnlineHandlers = require('./getSalesOnlineHandlers.js');
const getSalesLocalHandlers = require('./getSalesLocalHandlers.js');
const getSalesBalanceHandlers = require('./getSalesBalanceHandlers.js');
const getSalesAnnualBalanceHandler = require('./getSalesAnnualBalanceHandler.js');
const getMonthlySalesByClientHandler = require('./getMonthlySalesByClientHandler.js');
const getYearsOfSalesHandler = require('./getYearsOfSalesHandler.js');
const getSalesByMonthAndYearHandler = require('./getSalesByMonthAndYearHandler.js');
const getBalanceSalesByMonthAndYearHandler = require('./getBalanceSalesByMonthAndYearHandler.js');
const postSaleHandlers = require('./postSaleHandlers.js');
const putSaleHandler = require('./putSaleHandler.js');
const putSaleStatusHandler = require('./putSaleStatusHandler.js');
const deleteSaleHandler = require('./deleteSaleHandler.js');



module.exports = {
    getSalesHandlers,
    getActiveSalesHandler,
    getSaleByIdHandler,
    getSaleByOrderNumberHandlers,
    getSaleByClientNameHandlers,
    getSalesOnlineHandlers,
    getSalesLocalHandlers,
    getSalesBalanceHandlers,
    getSalesAnnualBalanceHandler,
    getMonthlySalesByClientHandler,
    getYearsOfSalesHandler,
    getSalesByMonthAndYearHandler,
    getBalanceSalesByMonthAndYearHandler,
    postSaleHandlers,
    putSaleHandler,
    putSaleStatusHandler,
    deleteSaleHandler
};