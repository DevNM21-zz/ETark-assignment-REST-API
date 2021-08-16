import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dbConnect from './db/connect.js';

import userRouter from './routes/user.js';
import homeRouter from './routes/home.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);
app.use(homeRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('API running on port:', port)
		dbConnect()
		.catch(err => {
		console.log('database connection error', err)
	});
})