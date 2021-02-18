import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: {} });

export default mongoose.models.products || mongoose.model('products', ProductSchema);