const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true,
    },
    jobSkill:{
        type:String,
        required:true,
        trim:true,
    },
    hiringCompany:{
        type:String,
        required:true,
        trim:true,
    },
    jobPay:{
        type:Number,
        required:true
    },
    jobDescription:{
        type:String,
        required:true,
        trim:true,
        maxlength:2000,
    },
    employerId:{
        type:Number,
        required:true,
    },
 },{timestamps:true}
);

module.exports = mongoose.model("Jobs",jobSchema);