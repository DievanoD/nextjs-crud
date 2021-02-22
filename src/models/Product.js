import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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

// Paginate
ProductSchema.plugin(mongoosePaginate);

export default mongoose.models.products || mongoose.model('products', ProductSchema);