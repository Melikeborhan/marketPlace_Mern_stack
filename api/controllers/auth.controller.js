import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password:
  hashedPassword });
  try {
      await newUser.save()
      res.status(201).json({ message: "User created successfully" });
  }catch(error){
   next(error);  //next(errorHandler(500,'error from the function')); //thıs we don't use now we use next(error)
  }
};


export const signin = async (req, res, next) => {
  const  {email , password} = req.body;
  try{
    const validUser = await  User.findOne({email:email})
    if(!validUser) return next(errorHandler(401,'User not found'));

    const validPassword = User.findOne({password:password})
    if(!validPassword) return next(errorHandler(401,'Wrong credentials'));
    
    const token  = jwt.sign({id:validUser._id},process.env.JWT_SECRET)//we are creating a token with the user id and the secret key
    const {password : hashedPassword, ...rest } = validUser._doc; //we don't want to see the password in the response and thıs doc is the object that we get from the database
    res
    .cookie('access token',token ,{httpOnly : true})//we are sending the token as a cookie
    .status(200)
    .json(rest);//rest is the user object without the password


  }catch(error){
    next(error);
  }   
}  


