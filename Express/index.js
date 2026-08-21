require("dotenv").config();
const express = require('express')
const db = require("./db_conn");
const app = express()

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8000;

const adminRoutes = require('./routes/adminRoutes');
app.use("/admin", adminRoutes)

const userRoutes = require('./routes/userRoutes');
app.use("/user", userRoutes)

// http://localhost:8000
app.get("/",(req, res)=>{
    res.send("Hello World")
})
app.get("/home",(req, res)=>{
    res.send("Welcome to Home")
})

app.post("/",(req,res)=>{
    res.send("Response from the post")
})

app.put("/",(req,res)=>{
    res.send("Resposnse from PUT.....")
})

app.post("/",(req,res)=>{
    res.send("Resposnse from POST.....")
})

app.delete("/",(req,res)=>{
    res.send("Resposnse from DELETE.....")
})

app.get("/emp",(req, res)=>{
    userData = {userName: "Abhay Raj", userAge: 23, userProfession:"Musician"}
    res.json(userData);
})

app.listen(PORT, HOST , (error)=>{
    if(error)
        console.log("Error Occured : " + error);
    else
        console.log(`Server Running at http://&{HOST}:${PORT}`);
})