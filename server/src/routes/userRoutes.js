const { Router } = require('express');
const { getUsersHandler, getUserByEmailHandler, getUsersByNameHandler, getUserByIdHandler, postUserHandler, putUserHandler, deleteUserHandler } = require('../handlers/userHandlers/indexHandlers');

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    
    const { name } = req.query;
    const { email } = req.query;
    const { _id } = req.query;

    if (name) {
        return getUsersByNameHandler(req, res);
    }

    if (email) {
        return getUserByEmailHandler(req, res);
    }

    if (_id) {
        return getUserByIdHandler(req, res);
    }

    return getUsersHandler(req, res);
});

userRouter.post('/', postUserHandler);

userRouter.put('/', putUserHandler);

userRouter.delete('/:id', deleteUserHandler);


module.exports = userRouter;