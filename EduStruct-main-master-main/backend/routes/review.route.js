import express from "express";
import { addSchoolReview, getSchoolReviews, getSchoolReviewsBySchoolId} from "../controllers/review-controller.js";
import  isAuthenticated  from "../middleware/isAuthenticated.js";



 
const router = express.Router();

router.route("/create").post(isAuthenticated,addSchoolReview);
router.route("/all").get(getSchoolReviews);
router.route("/:id").get(getSchoolReviewsBySchoolId);



export default router;