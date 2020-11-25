const express = require("express");
const app = express();
app.get("/index5/:id",(req,res)=>{
    res.send(req.params)
})
app.get("/index/:id?",(req,res)=>{
    res.send(req.params)
})


app.listen(8080,()=>{
    console.log("http://127.0.0.1:8080")
})