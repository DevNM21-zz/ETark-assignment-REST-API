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

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		let user;
		try {
			user = await User.findByCredentials(email, password);
			const token = user.generateAuthToken();
			return res.json({
				user: user.stripSensitiveInfo(),
				token,
			})
		} catch (e) {
				return res.status(401).json({ message: "Invalid Credentials" });
		}
	} catch (e) {
		res.status(500).json({ message: e.toString() });
	}
}