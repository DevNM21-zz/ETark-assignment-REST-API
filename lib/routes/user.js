import express from 'express';
const router = express();
import { createUser } from '../controllers/user.js'
import { body, validationResult } from 'express-validator';

router.post('/signup',
	body(['email', 'password', 'name']).notEmpty({ ignore_whitespace: true }),
	createUser)
export default router;
