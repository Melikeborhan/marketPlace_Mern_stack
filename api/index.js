import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB!');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());

const corsOpts = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   
  }

 app.use(cors(corsOpts))



app.listen(3000,() =>{
    console.log('server is running on port 3000');
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);




app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });

});


