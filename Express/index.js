require("dotenv").config();
const cors = require('cors');
const express = require('express')
const db = require("./db_conn");
const app = express()

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin:'http://localhost:5173',
    credentials : true
}),
);

app.use(express.json())

// hide password
const sanitizeUser = (user)=>{    
    user = user.toObject ? user.toObject(): {...user}
    delete user["userPwd"];
    return user
}

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


const bcrypt = require('bcrypt')
// Login
app.use("/login",async (req,res,next) => {
    try{
        const { mail, pwd} = req.body;
        if (!pwd || !mail) 
                return sendError(
                    res,
                    STATUS_CODES.BAD_REQUEST,
                    MESSAGES.AUTH.MISSING_VALUES,
                );
        const user = await UserModel.findOne({userEmail:mail});
        if(!user)
            return sendError(
                    res,
                    STATUS_CODES.NOT_FOUND,
                    MESSAGES.USER.NOT_FOUND,
                );
        const isMatched = await bcrypt.compare(pwd, user.userPwd)
        if (!isMatched)
            return sendError(
            res,
            STATUS_CODES.UNAUTHORIZED,
            MESSAGES.AUTH.INVALID_CREDENTIALS,
        );     

        // JWT Token
        // HTTP Cookie
        return sendSuccess(
            res,
            STATUS_CODES.OK,
            MESSAGES.AUTH.LOGIN_SUCCESS,
            sanitizeUser(user)
        );
    }
    catch(err){
        next(err)
    }
    
})

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
const errorHandler = require("./middlewares/errorMiddleware");
const UserModel = require("./models/userModel");
const { sendError, sendSuccess } = require("./utils/responseHelper");
const STATUS_CODES = require("./constants/statusCodes");
const MESSAGES = require("./constants/messages");
const { sanatizeUser } = require("./controllers/adminController");
app.use(errorHandler)

app.listen(PORT, HOST , (error)=>{
    if(error)
        console.log("Error Occured : " + error);
    else
        console.log(`Server Running at http://&{HOST}:${PORT}`);
})