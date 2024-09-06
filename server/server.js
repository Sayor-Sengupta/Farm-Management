import express from 'express'

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the server</h1>')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')    
})                          