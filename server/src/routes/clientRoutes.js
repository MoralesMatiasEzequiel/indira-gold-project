const clientRouter = require('express').Router();
const { getClientsHandler, getClientByNameHandler, getClientByEmailHandler, getClientByIdHandler, postClientHandler, putClientHandler, putClientStatusHandler, deleteClientHandler } = require('../handlers/clientHandlers/indexHandlers.js');

clientRouter.get('/', (req, res, next) => {
    const { name, email } = req.query;

    if (name) {
        return getClientByNameHandler(req, res, next);
    } 
    if (email) {
        return getClientByEmailHandler(req, res, next);
    }
    return getClientsHandler(req, res, next);   
});

clientRouter.get('/:id', getClientByIdHandler);

clientRouter.post('/', postClientHandler); 

clientRouter.put('/', putClientHandler);

clientRouter.put('/:id', putClientStatusHandler);

clientRouter.delete('/:id', deleteClientHandler);


module.exports = clientRouter;