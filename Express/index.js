require("dotenv").config();
const express = require('express')
const db = require("./db_conn");
const app = express()

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8000;

app.use(express.json())

//--------------------Middleware 1 -------------
const middleware1 = (req,res, next)=>{
    console.log("Middleware 1 calling....")
    req.userData = {uid: 1001, unm: "Rahul"};
    next();
}
app.use(middleware1)

//--------------------Middleware 2 -------------
const middleware2 = (req,res, next)=>{
    console.log("Middleware 2 calling....")
    req.userData.unm = req.userData.unm.toUpperCase()
    next();
}
app.use(middleware2);


const adminRoutes = require('./routes/adminRoutes');
app.use("/admin", adminRoutes)

const userRoutes = require('./routes/userRoutes');
app.use("/user", userRoutes)


// http://localhost:8000
app.get("/",(req, res)=>{
    console.log(req.userData);
    res.send("Hello World")
})
app.get("/home",(req, res)=>{
    res.send("Welcome to Home")
})

app.post("/",(req,res)=>{
    res.send("Response from the post")
})

app.put("/",(req,res,next)=>{
    const err = new Error("Something went erong....")
    return next(err)
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

//---Error Handling Middleware------
const errorHandler = (err,req,res,next)=>{
    console.log("Error handling Middleware...")
    res.status(500).json({
        success:false,
        message:err.message,
        err:err.stack,
    })
}
app.use(errorHandler)

app.listen(PORT, HOST , (error)=>{
    if(error)
        console.log("Error Occured : " + error);
    else
        console.log(`Server Running at http://&{HOST}:${PORT}`);
})