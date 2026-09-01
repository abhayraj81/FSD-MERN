const { sendError, sendSuccess } = require("../utils/responseHelper");
const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

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
const bcrypt = require('bcrypt')

const sanitizeUser = (user)=>{    
    user = user.toObject ? user.toObject(): {...user}
    delete user["userPwd"];
    return user
}

const adminAddUser = async (req, res, next)=>{
    // console.log(req.body);
try{
    const {unm, pwd, mail} = req.body;
    const hashedPwd = await bcrypt.hash(pwd,10)
    if (!unm || !pwd || !mail) 
        return sendError(
            res,
            STATUS_CODES.BAD_REQUEST,
            MESSAGES.AUTH.MISSING_VALUES,
        );

    let newUser = new UserModel({
        userName: unm,
        userPwd: hashedPwd,
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
};

const adminShowUsers = async (req, res, next)=>{
    try{
        // const allUsers = await UserModel.find({},{ userPwd : 0 })
        // const allUsers = await UserModel.find().select("userName userEmail")
        // const allUsers = await UserModel.find().select("-userPwd")
        const allUsers = await UserModel.find()

        return sendSuccess(res,
                           STATUS_CODES.OK,
                           MESSAGES.USER.FETCHED_ALL,
                           allUsers.map(sanitizeUser),
                        )
    }
    catch(err)
    {
        next(err)
    }
}

const adminFindUser = async(req,res,next)=>{
    try{
        const user = await UserModel.findById(req.params.id)
        if(!user)
            return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND)
        return sendSuccess(res,
                           STATUS_CODES.OK,
                           MESSAGES.USER.FETCHED,
                           sanatizeUser(user),
                        );        
   }catch (err){
    next(err);
   }
};

const adminDeleteUser = async(req,res,next)=>{
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id)
        if(!user)
            return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND)
        return sendSuccess(res,
                           STATUS_CODES.OK,
                           MESSAGES.USER.DELETED,
                           sanitizeUser(user),
                        );        
    }catch(err){
        next(err);
    }
}

// Upadte User details
const adminUpdateUser = async (req,res,next)=>{
    try{
        const {mail} = req.body;        
        if (!mail) 
        return sendError(
            res,
            STATUS_CODES.BAD_REQUEST,
            MESSAGES.AUTH.MISSING_VALUES,
        );

        const user = await UserModel.findByIdAndUpdate(
            req.params.id,
            {
                userEmail:mail
            },
        {
           new:true,
           runValidators:true, 
        });
        if(!user)
            return sendError(res, STATUS_CODES.NOT_FOUND, MESSAGES.USER.NOT_FOUND)
            return sendSuccess(res,
                           STATUS_CODES.OK,
                           MESSAGES.USER.UPDATED,
                           sanitizeUser(user),
                        );        
    }catch(err){
        next(err);
    }
}

module.exports = {adminDefault ,
                  adminHome ,
                   adminAbout,
                    adminGetUser,
                     adminAddUser,
                      adminShowUsers,
                       sanitizeUser,
                        adminFindUser,
                         adminDeleteUser,
                          adminUpdateUser}
