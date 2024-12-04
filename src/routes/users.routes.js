import express from "express";
import { registerUser , loginUser, logoutUser, refreshToken } from "../controllers/users.controllers.js";

const router = express.Router();



router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refresh", refreshToken);



export default router;