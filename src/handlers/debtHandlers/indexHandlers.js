const getDebtsHandler = require('./getDebtsHandler.js');
const getActiveDebtsHandler = require('./getActiveDebtsHandler.js');
const getDebtByIdHandler = require('./getDebtByIdHandler.js');
const getDebtByOrderNumberHandler = require('./getDebtByOrderNumberHandler.js');
const getDebtByClientNameHandler = require('./getDebtByClientNameHandler.js');
const postDebtHandler = require('./postDebtHandler.js');
const putDebtHandler = require ('./putDebtHandler.js');
const putDebtAmountHandler = require('./putDebtAmountHandler.js');
const putDebtStatusHandler = require('./putDebtStatusHandler.js');

module.exports = {
    getDebtsHandler,
    getActiveDebtsHandler,
    getDebtByIdHandler,
    getDebtByOrderNumberHandler,
    getDebtByClientNameHandler,
    postDebtHandler,
    putDebtHandler,
    putDebtAmountHandler,
    putDebtStatusHandler
};