import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
	name: {
			type: String,
			required: true,
			trim: true,
	},
	email: {
		type: String,
		match: /\S+@\S+\.\S+/,
		lowercase: true,
		trim: true,
		required: true,
		unique: true, // unique constraint
	},
	password: {
		type: String,
		required: true,
	},
});
userSchema.index({
	email: 1,
});


userSchema.methods.generateAuthToken = function (next) {
	return jwt.sign({
		sub: this._id.toString(),
	}, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
};

userSchema.methods.stripSensitiveInfo = function (next) {
	const user = this.toObject();
	delete user.password;
	return user;
};

// the below pre-save hook on user model checks if the password has been altered before saving
// if it is, it hashes it and replaces it using bcrypt

userSchema.pre('save', function (next) {
	const user = this;
	const SALT_FACTOR = 8;
	if (!user.isModified('password')) return next();
	bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
		if (err) return next(err);
		// hashing password
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);
			user.password = hash;
			return next();
		});
	});
});


const User = mongoose.model('User', userSchema);
export default User;