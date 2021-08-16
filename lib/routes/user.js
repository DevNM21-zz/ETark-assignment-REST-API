import express from 'express';
const router = express();
import { createUser } from '../controllers/user.js'

router.post('/signup', createUser)
export default router;
