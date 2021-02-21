import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async (req, res) => {

    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const { username } = req.query;
                const user = await User.findOne({ username: username });
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