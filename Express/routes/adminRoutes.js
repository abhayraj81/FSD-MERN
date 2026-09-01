
const express = require('express')
const router = express.Router()
const {adminDefault, adminHome, adminAbout, adminGetUser, adminAddUser, adminShowUsers, adminFindUser, adminDeleteUser, adminUpdateUser} = require("../controllers/adminController")

//-------------Route Level Middleware------------
const middleware3 = (req, res, next)=>{
    console.log("Admin Route Middleware....");
    next()
}
router.use(middleware3)


// http://localhost:8081/admin
router.get("/",(req,res)=>{
    res.send("<h1 align= 'center'> Admin Default Page </h1>");
});

// http://localhost:8081/admin/home
router.get("/home",adminHome);

router.get("/about",adminAbout);
// router.get("/user",adminGetUser);

// http://localhost:8081/admin/add
router.post("/add", adminAddUser)

router.get("/show",adminShowUsers)

//localhost:8081/admin/user/id
router.get("/user/:id",adminFindUser)

//localhost:8081/admin/user/1 (Method = DELETE)
router.delete("/user/:id",adminDeleteUser)

//localhost:8081/admin/user/1 (Method = DELETE)
router.put("/user/:id",adminUpdateUser)

const uploadProfilePic = require('../middlewares/uploadProfilePic')
// profilepicCtrl - name of file control in frontend form
router.post("/profileUpload", uploadProfilePic,uploadProfilePic.single('profilePicCtrl'))


module.exports = router;