import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        typeof: String,
        required: true,
        unique:true,
},
    email: {
        typeof: String,
        required: true,
        unique:true,
},
    password: {
        typeof: String,
        required: true,
    }
       
}, { timestamps: true }); // this will add createdAt and updatedAt timestamps

const User = mongoose.model("User", userSchema);//thıs user must be sıngular 

export default User;
