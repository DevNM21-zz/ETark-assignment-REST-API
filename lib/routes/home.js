import express from 'express';
import { userAuth } from '../middlewares/user.js';

const router = express();
router.get('/home',
	userAuth,
	(req, res) => res.send(`Success. UserId: ${req.userId}`));

export default router