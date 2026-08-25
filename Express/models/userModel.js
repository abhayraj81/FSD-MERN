const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{type:String, requied:true},
    userPwd:{type:String, required:true},
    userEmail:{type:String, requied:true, unique:true},
    isActive:{type:Boolean, requied:true, default:true},
    createdAt:{type:Date , required:true, default:Date.now},
    role:{type:String, enum:['admin','user'], 
          requied:true, default:'user'}
    
})

const UserModel = mongoose.model("AppUsers", userSchema)

module.exports = UserModel