const getClientsHandler = require('./getClientsHandler.js');
const getClientByNameHandler = require('./getClientByNameHandler.js');
const getClientByLastnameHandler = require('./getClientByLastnameHandler.js');
const getClientByEmailHandler = require('./getClientByEmailHandler.js');
const getClientByIdHandler = require('./getClientByIdHandler.js');
const postClientHandler = require('./postClientHandler.js');
const putClientHandler = require('./putClientHandler.js');
const putClientStatusHandler = require('./putClientStatusHandler.js')
const deleteClientHandler = require('./deleteClientHandler.js');


module.exports = {
    getClientsHandler,
    getClientByNameHandler,
    getClientByLastnameHandler,
    getClientByEmailHandler,
    getClientByIdHandler,
    postClientHandler,
    putClientHandler,
    putClientStatusHandler,
    deleteClientHandler
}