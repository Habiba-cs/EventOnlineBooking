const mongoose = require("mongoose")

const usersModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Username is required"],
        trim: true, 
    },

    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    }, 

    profilePicture: {
        type: String,
    },

    password: {
        type:String, 
        required:[true,"Password is required"],
        minlength: 6,
    },

    role:{
        type:String,
         enum: ["Standard User","Organizer","System Admin"],
         default: "Standard User",
        
    },
},
{timestamps: true}
);

const User=mongoose.model("User", usersModelSchema);

module.exports=User;