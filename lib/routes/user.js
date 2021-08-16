import express from 'express';
const router = express();

import { createUser, loginUser } from '../controllers/user.js'
import { body } from 'express-validator';
import { validationHandler } from '../middlewares/validator.js';

router.post('/signup',
	body(['email', 'password', 'name']).notEmpty({ ignore_whitespace: true })
		.withMessage((value, { req, location, path }) => `${path} cannot be empty`),
	body('email')
		.isEmail()
		.withMessage('Please provide a valid email address'),
	validationHandler,
	createUser);

router.post('/login',
	body('email')
		.notEmpty()
		.withMessage('Email cannot be empty')
		.isEmail()
		.withMessage('Please provide a valid email address'),
	body('password')
		.notEmpty({ ignore_whitespace: true })
		.withMessage('Password cannot be empty'),
	validationHandler,
	loginUser);

export default router;
