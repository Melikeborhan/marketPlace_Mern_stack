import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bycryptjs.hashSync(password, 10);
  try{
  const newUSer = User({ username, email, password:hashedPassword });
  await newUSer.save()
  res.status(201).json({ message: "User created successfully" });
    } catch (error) {
    res.status(500).json(error.message);
    }
}
