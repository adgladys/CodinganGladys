import express from 'express';
import {
    index,
    register,
    signin,
    remove,
    update
} from './user.controller';
import * as middleware from '../../middleware';

let userRouter = express.Router();

userRouter.get('/', middleware.isAuthenticated, index);
userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.delete('/remove/:id', middleware.isAuthenticated, remove);
userRouter.put('/update/:id', middleware.isAuthenticated, update);

export default userRouter;