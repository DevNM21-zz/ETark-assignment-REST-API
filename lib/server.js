import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './routes/user.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('API running on port:', port)
	mongoose.connect(process.env.DB_PATH, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		})
		.catch(err => {
		console.log('database connection error', err)
	});
})