const getClientsHandler = require('./getClientsHandler.js');
const getClientByDniHandler = require('./getClientByDniHandler.js');
const getClientByNameHandler = require('./getClientByNameHandler.js');
const getClientByLastnameHandler = require('./getClientByLastnameHandler.js');
const getClientByEmailHandler = require('./getClientByEmailHandler.js');
const getClientByIdHandler = require('./getClientByIdHandler.js');
const postClientHandler = require('./postClientHandler.js');
const putClientHandler = require('./putClientHandler.js');
const putClientStatusHandler = require('./putClientStatusHandler.js')
const putRemovePurchasesHandler = require('./putRemovePurchasesHandler.js');
const deleteClientHandler = require('./deleteClientHandler.js');


module.exports = {
    getClientsHandler,
    getClientByDniHandler,
    getClientByNameHandler,
    getClientByLastnameHandler,
    getClientByEmailHandler,
    getClientByIdHandler,
    postClientHandler,
    putClientHandler,
    putClientStatusHandler,
    putRemovePurchasesHandler,
    deleteClientHandler
}