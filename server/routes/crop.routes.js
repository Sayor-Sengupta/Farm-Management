import {Router} from "express"
import  { cropPredict, yeildAnalysis } from "../controller/Crop.controller.js"
 const router = Router()

router.post("/predict",cropPredict)
router.post("/analyze",yeildAnalysis)
export default router