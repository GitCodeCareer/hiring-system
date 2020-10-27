const mongoose = require("mongoose");

const employerUserSchema = new mongoose.Schema({
    pocName:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true,
    },
    pocEmail:{
        type:String,
        required:true,
        trim:true,
    },
    pocPhone:{
        type:String,
        required:true,
        trim:true,
    },
    companyName:{
        type:Number,
        required:true
    },
 },{timestamps:true}
);

module.exports = mongoose.model("employer",employerUserSchema);