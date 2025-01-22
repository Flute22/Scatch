import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    },

    cart: {
        type: Array,
        default: []
    },

    isAdmin: Boolean,

    orders: {
        type: Array,
        default: []
    },

    contact: Number,
    picture: String

}, {timestamps: true});

export const User = mongoose.model("User", userSchema);