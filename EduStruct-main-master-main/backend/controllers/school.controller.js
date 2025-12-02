import { School } from "../models/school.model.js";



export const createSchool = async(req,res)=>{
    try {
        const{name,grades,classes,status,infrastructure}=req.body;
      //  const userId = req.id;

        if (!name ||   !grades || !classes || !status || !infrastructure) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const school = await School.findOne({name});
        if(school){
            return res.status(400).json({
                message:"School already exists",
                success: false,
            });
        }
        const newSchool = new School({name,grades,classes,status,infrastructure,userId:req.id});
        await newSchool.save();
        return res.status(201).json({
            message:"School created successfully",
            success:true
        });

    } catch (error) {
         console.log(error);
    }
}

export const getAllSchools = async(req,res)=>{
    try {
      
        const schools = await School.find({});
        return res.status(200).json({
            message:"Schools fetched successfully",
            success:true,
            schools
        }); 
    } catch (error) {
        console.log(error);
    }
}

export const getSchoolByUserId = async(req,res)=>{
    try {
        const userId = req.id;
        const school = await School.find({userId});
       // console.log(school);
        if(!school){
            return res.status(404).json({
                message:"School not found",
                success:false       
            });
        }
        return res.status(200).json({
            school,
            message:"School fetched successfully",
            success:true,
         
        });
    } catch (error) {
        console.log(error);
    }
}

export const getSchoolById = async(req,res)=>{
    try {
        const schoolId = req.params.id;
        const school = await School.findById({_id:schoolId});
        if(!school){
            return res.status(404).json({
                message:"School not found",
                success:false
            });
        }
        return res.status(200).json({
            message:"School fetched successfully",
            success:true,
            school
        });
    } catch (error) {
        console.log(error);
    }
}


export const deleteSchool = async(req,res)=>{
    try {
        const schoolId = req.params.id;
        const school = await School.findByIdAndDelete({_id:schoolId});
        if(!school){
            return res.status(404).json({
                message:"School not found",
                success:false
            });
        }
        return res.status(200).json({
            message:"School deleted successfully",
            success:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateSchool = async(req,res)=>{
    try {
        const schoolId = req.params.id;
        const userId = req.id;
        const {name,grades,classes,status,infrastructure} = req.body;
        const updateSchool = {name,grades,classes,status,infrastructure,userId};
        const updatedSchool = await School.findByIdAndUpdate({_id:schoolId},updateSchool,{new:true});
        if(!updatedSchool){
            return res.status(404).json({
                message:"School not found",
                success:false
            });
        }
        return res.status(200).json({
            message:"School updated successfully",
            success:true,
            updatedSchool
        });
    } catch (error) {
        console.log(error);
    }
}
