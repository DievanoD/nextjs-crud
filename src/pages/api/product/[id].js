import { getSession } from 'next-auth/client';
import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

export default async (req, res) => {
    const { method } = req;
    const session = await getSession({ req });

    if (!session) return res.json({ success: false, message: 'You need to be logged in to access the data.' });

    await dbConnect();

    switch (method) {
        case 'GET': // search
            try {
                const { id, page = 1 } = req.query;
                let products;
                if (id === 'all') {
                    products = await Product.paginate({}, { page: parseInt(page), limit: 5 });
                } else {
                    products = await Product.paginate({ name: { "$regex": `^${id}`, "$options": "i" } }, { page: parseInt(page), limit: 5 });
                }
                res.status(200).json({ success: true, data: products });
            } catch (err) {
                res.status(400).json({ success: false, message: err });
            }
            break;
        case 'PUT': // edit
            try {
                const { id } = req.query;
                const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
                res.status(200).json({ success: true, data: product });
            } catch (err) {
                res.status(400).json({ success: false, message: err });
            }
            break;
        case 'DELETE': // delete
            try {
                const { id } = req.query;
                const product = await Product.findOneAndDelete({ _id: id });
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