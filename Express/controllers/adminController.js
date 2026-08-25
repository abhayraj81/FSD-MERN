const adminDefault = (req,res)=>{
    res.send("<h1 align= 'center'> Admin Default Page </h1>");
};

const adminHome = (req,res)=>{
    res.send("<h1 align= 'center'> Admin Home Page </h1>");
};

const adminAbout = (req,res)=>{
    res.send("<h1 align= 'center'> Admin About Us Page </h1>");
};

const adminGetUser = (req,res)=>{
    res.status(200).json({
        sucess : true,
        message : "User found...",
        data : {unm : "Abhay Raj", uid : 1001},
    });
};

const UserModel = require("../models/userModel");
const adminAddUser = async (req, res, next)=>{
    console.log(req.body);
try{
    let newUser = new UserModel({
        userName: req.body.unm,
        userPwd: req.body.pwd,
        userEmail:req.body.mail
    });
    newUser = await newUser.save();
    // console.log(newUser);
    res.json(newUser);
}   
catch (err){
    next(err);
}
    // res.status(200).json(newUser);
}

module.exports = {adminDefault ,adminHome , adminAbout, adminGetUser, adminAddUser}
