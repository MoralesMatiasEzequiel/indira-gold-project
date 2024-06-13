const getUsersHandler = require('./getUsersHandler');
const getUsersByNameHandler = require('./getUsersByNameHandler');
const getUserByEmailHandler = require('./getUserByEmailHandler');
const getUserByIdHandler = require('./getUserByIdHandler');
const postUserHandler = require('./postUserHandler');
const putUserHandler = require('./putUserHandler');
const deleteUserHandler = require('./deleteUserHandler');


module.exports = {
    getUsersHandler,
    getUsersByNameHandler,
    getUserByEmailHandler,
    getUserByIdHandler,
    postUserHandler,
    putUserHandler,
    deleteUserHandler
}