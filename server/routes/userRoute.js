import express from "express";
import {
  approveUser,
  createUser,
  getPendingUser,
  getProfile,
  login,
  updateProfile,
  updateProfilePic,
} from "../controller/userController.js";
import { isAdmin, requireSignIn } from "../middleware/authmiddleware.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

//creating a user
router.post("/user", createUser);
router.post("/login", login);

//updating profile pic
router.put('/userprofile/:id', updateProfile);
router.put("/update-pic/:id", singleUpload, updateProfilePic);

router.get("/userprofile/:id", getProfile);

//getPendingUser
router.get("/pendinguser", getPendingUser);

router.put("/:id/approve", approveUser);

//test route
router.get("/test", requireSignIn, isAdmin, (req, res) => {
  res.send({ message: "This is protected route of admin" });
});

export default router;
