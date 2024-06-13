const getClientsHandler = require('./getClientsHandler.js');
const getClientByNameHandler = require('./getClientByNameHandler.js');
const getClientByEmailHandler = require('./getClientByEmailHandler.js');
const getClientByIdHandler = require('./getClientByIdHandler.js');
const postClientHandler = require('./postClientHandler.js');
const putClientHandler = require('./putClientHandler.js');
const deleteClientHandler = require('./deleteClientHandler.js');


module.exports = {
    getClientsHandler,
    getClientByNameHandler,
    getClientByEmailHandler,
    getClientByIdHandler,
    postClientHandler,
    putClientHandler,
    deleteClientHandler
}