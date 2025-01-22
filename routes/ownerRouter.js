import express from "express";
const router = express.Router(); 

router.get("/", (req, res) => {
    res.send("hey it's Owner this side!");
});

export default router;