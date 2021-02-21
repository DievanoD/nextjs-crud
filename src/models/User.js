import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // token here?
}, { timestamps: {} });

export default mongoose.models.users || mongoose.model('users', UserSchema);