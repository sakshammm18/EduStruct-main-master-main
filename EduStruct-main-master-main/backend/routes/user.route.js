import express from "express";
import { login, logout, register, getAllUsers, deleteUser} from "../controllers/user.controller.js";




 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/getAllUsers").get(getAllUsers);
router.route("/deleteUser/:id").delete(deleteUser);


export default router;