import mongoose, { Schema } from "mongoose";

const ownerSchema = new Schema({
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

    products: {
        type: Array,
        default: []
    },

    picture: String,

    gstNo: String

}, {timestamps: true});

export const Owner = mongoose.model("Owner", ownerSchema);