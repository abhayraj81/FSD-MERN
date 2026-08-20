
const express = require('express')
const router = express.Router()
const {adminDefault, adminHome, adminAbout, adminGetUser} = require("../controllers/adminController")

// http://localhost:8081/admin
router.get("/",(req,res)=>{
    res.send("<h1 align= 'center'> Admin Default Page </h1>");
});

// http://localhost:8081/admin/home
router.get("/home",adminHome);

router.get("/about",adminAbout);
router.get("/user",adminGetUser);


module.exports = router