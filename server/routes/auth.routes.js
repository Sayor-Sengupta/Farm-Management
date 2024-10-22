import { Router } from "express";
import {
  changeRoleToBuyerAndSeller,
  login,
  logout,
  resendOTP,
  signIn,
  verifyOtp,
} from "../controller/auth.controller.js";
import loggedIn from "../middleware/LoggedIn.middleware.js";

const router = Router();

router.post("/login", login);
router.post("/signUp", signIn);
router.post("/logout", logout);
router.post("/verify", verifyOtp);
router.post("/resendOTP", resendOTP);
router.get("/changeRole",loggedIn, changeRoleToBuyerAndSeller);
export default router;
