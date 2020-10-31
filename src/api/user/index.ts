import express from 'express';
import {
    index,
    create,
    remove,
    update
} from './user.controller';

let userRouter = express.Router();

userRouter.get('/index/:id', index);
userRouter.post('/create', create);
userRouter.delete('/remove/:id', remove);
userRouter.put('/update/:id', update);

export default userRouter;