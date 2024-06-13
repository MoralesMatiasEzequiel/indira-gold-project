const clientRouter = require('express').Router();
const { getClientsHandler, getClientByNameHandler, getClientByEmailHandler, getClientByIdHandler, postClientHandler, putClientHandler, deleteClientHandler } = require('../handlers/clientHandlers/indexHandlers.js');


clientRouter.get('/', getClientsHandler);

clientRouter.get('/', getClientByNameHandler);

clientRouter.get('/', getClientByEmailHandler);

clientRouter.get('/:id', getClientByIdHandler);

clientRouter.post('/', postClientHandler); 

clientRouter.put('/', putClientHandler);

clientRouter.delete('/:id', deleteClientHandler);


module.exports = clientRouter;