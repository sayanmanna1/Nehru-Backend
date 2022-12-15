const mongoose = require('mongoose');
const validator = require('validator');

const objectid = mongoose.Schema.Types.ObjectId;

//schema
const boarderSchema =  new mongoose.Schema(
    {
        name : {
            type:String,
            required: true
        },
        roll_no : {
            type:objectid,
            required: true,
            unique:true
        },
        email: {
            type: String,
            required : true,
            unique:[true,"Email id already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
        mobile : {
            type:String,
            required: true,
            unique: true
        },
        is_graduated : Boolean,
        graduation_year : String,
    }

)

const Boarder = new mongoose.model("Boarder", boarderSchema);
module.exports = Boarder;