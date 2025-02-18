import { Schema, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcryptjs';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await compare(enteredPassword, this.password);
};

const User = model('User', userSchema);

export default User;
