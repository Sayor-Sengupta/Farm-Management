import express, { Router } from 'express'

const router = Router()

router.post('/login', async (req, res) => {
    res.send('login')

})
router.post('/signin', async (req, res) => {


})
router.post('/logout', async (req, res) => {


})
export default router