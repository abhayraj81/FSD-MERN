const express = require('express')

const app = express()

const HOST = 'localhost'
const PORT = 8000

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