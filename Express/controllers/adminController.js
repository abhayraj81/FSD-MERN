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

const { sendError, sendSuccess } = require("../utils/responseHepler");
const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const adminAddUser = async (req, res, next)=>{
    // console.log(req.body);
try{
    const {unm, pwd, mail} = req.body;
    if (!unm || !pwd || !mail) 
        return sendError(
            res,
            STATUS_CODES.BAD_REQUEST,
            MESSAGES.AUTH.MISSING_VALUES,
        );

    let newUser = new UserModel({
        userName: unm,
        userPwd: pwd,
        userEmail:mail
    });

    newUser = await newUser.save();
    // console.log(newUser);
    return sendSuccess(res,
                       STATUS_CODES.CREATED,
                       MESSAGES.USER.CREATED,
                       newUser)
    // res.json(newUser);
}   
catch (err){
    next(err);
}
    // res.status(200).json(newUser);
}

module.exports = {adminDefault ,adminHome , adminAbout, adminGetUser, adminAddUser}
