import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema ({
    firstName :{
        type : String,
        required : true,
        minLength :[3, "first name must contain at least 3 characters!"],
    },
    lastName :{
        type : String,
        required : true,
        minLength :[3, "last name must contain at least 3 characters!"],
    },
    email :{
        type : String,
        required : true,
        validate : [validator.isEmail , "please provide a valid email!"],
    },
    phone :{
        type : String,
        required : true,
        minLength :[11, "phone number must contain 11 digits!"],
        maxLength :[11, "phone number must contain 11 digits!"],
    },
    message :{
        type : String,
        required : true,
        minLength :[10, "message must contain at least 10 characters"],
    },
});

export const Message = mongoose.model("Message", messageSchema);