import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import  connectMongoDb  from "./utils/connectMongoDb.js";
import authRoutes from './routes/auth.routes.js'
import ecommerceRoutes from './routes/product.routes.js'
import cropRouter from './routes/crop.routes.js'
import soilRouter from "./routes/soil.routes.js";  
import smsRouter from './routes/sms.routes.js'
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000   ; 

  
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser()); 
app.use(express.json());
app.use('/api/users',authRoutes)
app.use('/api/Ecom',ecommerceRoutes)
app.use('/api/crop',cropRouter)
app.use("/api/soil", soilRouter); 
app.use("/api/sms", smsRouter);


app.listen(PORT, () => {
  connectMongoDb()
  console.log(`server is running ${PORT}`);
});
