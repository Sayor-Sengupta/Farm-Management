import {Router} from "express"
import  { cropPredict } from "../controller/Crop.controller.js"
 const router = Router()

router.post("/predict",cropPredict)

export default router