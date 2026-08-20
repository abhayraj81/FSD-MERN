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

module.exports = {adminDefault ,adminHome , adminAbout, adminGetUser}
