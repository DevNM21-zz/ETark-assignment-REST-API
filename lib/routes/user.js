import express from 'express';
const router = express();

import { createUser, loginUser } from '../controllers/user.js'
import { body } from 'express-validator';
import { validationHandler } from '../middlewares/validator.js';

router.post('/signup',
	body(['email', 'password', 'name']).notEmpty({ ignore_whitespace: true }),
	validationHandler,
	createUser);

router.post('/login',
	body('email').notEmpty().isEmail(),
	body('password').notEmpty({ ignore_whitespace: true }),
	validationHandler,
	loginUser);

export default router;
