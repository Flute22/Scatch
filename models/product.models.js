import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    image: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    price: {
        type: String,
        required: true,
    },


    discount: {
        type: Number,
        default: 0
    },

    bgColor: String,

    panelColor: String,

    textColor: String

}, {timestamps: true});

export const Product = mongoose.model("Product", productSchema);