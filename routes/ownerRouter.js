import express from "express";
const router = express.Router(); 
import { Owner } from "../models/owner.models.js";

router.get("/", (req, res) => {
    res.send("hey it's Owner this side!");
});

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        let owners = await Owner.find();
        if (owners.length > 0) {
            return res
             .status(503)
             .send("You don't have permission to create a new owner.")
        }

        let { fullname, email, password } = req.body;

        let createdOwner = await Owner.create({
            fullname, 
            email, 
            password,
        });

        res.status(201).send(createdOwner);
    });
}

export default router;