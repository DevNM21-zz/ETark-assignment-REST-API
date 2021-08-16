import { validationResult } from 'express-validator';
export const validationHandler = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.mapped() });
	}
}