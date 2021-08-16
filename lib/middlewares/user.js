import jwt from 'jsonwebtoken';
export const userAuth = (req, res, next) => {
	try {
		const authHeader = req.headers['authorization'];
		console.log(req.headers)
		const token = authHeader.replace('Bearer ', '');
		const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
		req.userId = decodedJWT.sub;
		next();
	} catch (e) {
		console.log(e)
		res.status(401).send('Invalid Token or Header Missing')
	}
}