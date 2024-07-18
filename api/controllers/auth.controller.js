import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bycryptjs.hashSync(password, 10);
  try{
  const newUSer = User({ username, email, password:hashedPassword });
  await newUSer.save()
  res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      next(error)   //next(errorHandler(500,'error from the function')); //thıs we don't use now we use next(error)
    }
}
