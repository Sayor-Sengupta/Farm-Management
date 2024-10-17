import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import  connectMongoDb  from "./utils/connectMongoDb.js";
import authRoutes from './routes/auth.routes.js'
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000   ; 

 
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser()); 
app.use(express.json());
app.use('/api/users',authRoutes)


app.listen(PORT, () => {
  connectMongoDb()
  console.log(`server is running ${PORT}`);
});
