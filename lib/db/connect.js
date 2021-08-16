import mongoose from 'mongoose';

export default () => mongoose.connect(process.env.DB_PATH, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	}
)