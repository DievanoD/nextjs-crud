import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async (req, res) => {

    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const user = await User.create(req.body);
                res.status(200).json({ success: true, data: user });
            } catch (err) {
                res.status(400).json({ success: false, message: err });
            }
            break;
        default:
            res.status(400).json({ success: false, message: 'error' });
            break;
    }
}