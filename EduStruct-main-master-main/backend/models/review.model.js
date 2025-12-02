import mongoose from 'mongoose';
const ReviewSchema=new mongoose.Schema({    
userId:{
    type:String,
    required:true,
},
 schoolId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'School',
   required:true,
    },
 fullname:{
    type:String,
   required:true,
 },
 review:{
    type:String,
    required:true,
 },
},{timestamps:true});
 export const Review = mongoose.model("Review", ReviewSchema);
