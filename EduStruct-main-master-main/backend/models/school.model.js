import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grades: {
        type: Number,
        required: true,
       
    },
    classes: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum:['Fully Furnished','Partially Furnished','Needs Improvement'],
        required: true
    },
    infrastructure: {
        toilets: {
            type: Boolean,
           
        },
        library: {  
            type: Boolean,
           
        },
        playground: {
            type: Boolean,
           
        },
        boundarywall: {
            type: Boolean,
           
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    },
{timestamps:true});
export const School = mongoose.model('School', schoolSchema);