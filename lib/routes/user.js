import express from 'express';
const router = express();

import { createUser, loginUser } from '../controllers/user.js'
import { body, check } from 'express-validator';

router.post('/signup',
	body(['email', 'password', 'name']).notEmpty({ ignore_whitespace: true }),
	createUser);

router.post('/login',
	body(['email', 'password']).notEmpty({ ignore_whitespace: true }),
	loginUser);

export default router;
