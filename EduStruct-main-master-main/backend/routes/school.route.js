import express from "express";
import { createSchool, getAllSchools, getSchoolByUserId, deleteSchool, updateSchool, getSchoolById} from "../controllers/school.controller.js";
import  isAuthenticated  from "../middleware/isAuthenticated.js";



 
const router = express.Router();

router.route("/create").post(isAuthenticated,createSchool);
router.route("/all").get(getAllSchools);
router.route("/my").get(isAuthenticated,getSchoolByUserId);
router.route("/:id").get(getSchoolById);
router.route("/delete/:id").delete(deleteSchool);
router.route("/update/:id").put(isAuthenticated,updateSchool);


export default router;