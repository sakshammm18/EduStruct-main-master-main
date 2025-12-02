import express from "express";
import cookieParser from "cookie-parser";   
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import schoolRoutes from "./routes/school.route.js";
import reviewRoutes from "./routes/review.route.js";
dotenv.config({});

const app=express();

app.get('/home',(req,res)=>{
   return res.status(200).json({
    message:"Hello World",
    success:true,
   });
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use(cookieParser());    
const corsOptions = {
    origin:['https://edu-struct-main.vercel.app','http://localhost:5175'],
    credentials:true
}

app.use(cors(corsOptions));


const PORT=process.env.PORT || 3000;


app.use("/api/user",userRoutes);
app.use("/api/school",schoolRoutes);
app.use("/api/review",reviewRoutes);
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

