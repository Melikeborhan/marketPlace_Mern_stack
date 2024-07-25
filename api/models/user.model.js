import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
},
    email: {
        type: String,
        required: true,
        unique:true,
},
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/026/966/960/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
    },
       
}, { timestamps: true }); // this will add createdAt and updatedAt timestamps

const User = mongoose.model("User", userSchema);//thıs user must be sıngular 

export default User;
