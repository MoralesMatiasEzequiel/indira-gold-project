const getDebtsHandler = require('./getDebtsHandler.js');
const getDebtByIdHandler = require('./getDebtByIdHandler.js')
const postDebtHandler = require('./postDebtHandler.js');
const putDebtHandler = require ('./putDebtHandler.js');
const putDebtAmountHandler = require('./putDebtAmountHandler.js');

module.exports = {
    getDebtsHandler,
    getDebtByIdHandler,
    postDebtHandler,
    putDebtHandler,
    putDebtAmountHandler
};