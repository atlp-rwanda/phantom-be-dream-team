import express from "express";
import forgotPassword from "../controllers/forgotPassword";

const router = express.Router()
router.post("/api/v1/forgotpassword", forgotPassword)


export default router
