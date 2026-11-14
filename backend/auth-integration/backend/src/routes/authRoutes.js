import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.route("/me").get(protect, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Loggedin User",
    data: req.user,
  });
});

authRouter.route("/register").post(registerUser);
authRouter.route("/login").post(loginUser);

export default authRouter;
