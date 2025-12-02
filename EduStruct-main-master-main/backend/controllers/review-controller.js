import { Review } from "../models/review.model.js";





 export const addSchoolReview=async(req,res)=>{
    try {
        const{schoolId,userId,fullname,review}=req.body;
        if (!schoolId || !userId || !fullname || !review) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
const user=req.id;  
        if (userId !== user) {
            return res.status(403).json({
                success: false,
                message: "You are not allowed to create this comment"
            });
          }
      
        const newReview=new Review({
            schoolId,
            userId,
            fullname,
            review,
          });


      await newReview.save();
      res.status(201).json({
        success: true,
         newReview,
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Error",
        });
    }
}


export const getSchoolReviewsBySchoolId=async(req,res)=>{
    try {
      const schoolId=req.params.id;
      const reviews=await Review.find({schoolId});
      res.status(200).json({
        success: true,
        reviews,
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Error",
        });
    }
}


export const getSchoolReviews=async(req,res)=>{
    try {
  
      const reviews=await Review.find({}).populate({
        path:'schoolId',
        select:'name',
      });
      res.status(200).json({
        success: true,
        reviews,
      });
    } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Error",
        });
    }
}





