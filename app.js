const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({message:"my server is running"})
})

const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`my Server is running ${port}`);
})