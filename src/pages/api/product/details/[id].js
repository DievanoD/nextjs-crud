import { getSession } from 'next-auth/client';
import dbConnect from '../../../../utils/dbConnect';
import Product from '../../../../models/Product';

export default async (req, res) => {
    const { method } = req;
    const session = await getSession({ req });

    if (!session) return res.json({ success: false, message: 'You need to be logged in to access the data.' });

    await dbConnect();

    switch (method) {
        case 'GET': // details
            try {
                const { id } = req.query;
                const product = await Product.findOne({ _id: id });
                res.status(200).json({ success: true, data: product });
            } catch (err) {
                res.status(400).json({ success: false, message: err });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}