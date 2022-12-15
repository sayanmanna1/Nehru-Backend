const mongoose = require('mongoose');
const validator = require('validator');

const objectid = mongoose.Schema.Types.ObjectId;

//schema
const userSchema = new mongoose.Schema(
    {
        name: String,
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
        position: String,
        password: objectid,
    }
)

//create collection
const User = new mongoose.model("User", userSchema);

module.exports = User;