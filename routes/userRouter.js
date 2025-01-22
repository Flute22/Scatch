import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hey it's user this side!");
});

export default router;