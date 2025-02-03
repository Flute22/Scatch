import mongoose from "mongoose";
import config from "config";

const db = async () => {
    await mongoose
        .connect(`${config.get("MONGODB_URI")}/scatch`)
        .then(() => console.log("MongoDb Connected"))
        .catch((err) => console.log("MongoDB Connection Error: ", err));   
}

export default db;