import { Router } from 'express'
import { login, logout, resendOTP, signIn, verifyOtp } from '../controller/auth.controller.js'

const router = Router()

router.post('/login',login)
router.post('/signUp', signIn)
router.post('/logout',logout)
router.post('/verify',verifyOtp)
router.post('/resendOTP',resendOTP)
export default router