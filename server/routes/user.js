import express from 'express';
const router = express.Router();

import { signup, login } from '../controllers/auth.js';
import auth from '../middlewares/auth.js'
import {getAllUsers,updateProfile} from '../controllers/users.js'

// router.post('/create', createUser);
router.post('/user/signup', signup);
router.post('/login',   login);
router.get('/getallusers',getAllUsers)
router.patch('/updatedprofile/:id', updateProfile)

export default router;
