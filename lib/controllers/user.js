import User from '../db/models/user.js';

export const createUser = async (req, res) => {
	try {
	const { name, email, password } = req.body;
	let user;
	
	try {
		user = await User.create({
			name,
			email,
			password,
		});
		
	} catch (err) {
		if (err.code === 11000 && err.keyPattern.email)
			res.status(422).json({ message: 'Email Already Exists' });
		else throw err;
	}
	
	const token = user.generateAuthToken();
	user = user.stripSensitiveInfo();
	res.status(201).json({ user, token });
	
	} catch (e) {
		res.status(500).json({ message: e.toString() });
	}
	
}