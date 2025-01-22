import mongoose from "mongoose";

/**
 * Establishes a connection to the MongoDB database
 * @function
 * @name db
 * @returns {Promise} - resolves to undefined on success, rejects with error on failure
 */
const db = async () => {
    await mongoose
        .connect("mongodb://127.0.0.1:27017/Scatch")
        .then(() => console.log("MongoDb Connected"))
        .catch((err) => console.log("MongoDB Connection Error: ", err));   
}

export default db;