
const { sendError } = require("../utils/responseHepler");

const errorHandler = (err,req,res,next)=>{
    return sendError(res, err.statusCode , err.message, err.stack)        
    };

    // console.log("Error handling Middleware...")
    // res.status(500).json({
    //     success:false,
    //     message:err.message,
    //     err:err.stack,
    // })

module.exports = errorHandler;
