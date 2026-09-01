
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req, file, cb)
    {
        cb(null, "uploads/profilePic")
    },
    filename:function(req,file,cd)
    {   // path.extname("A.jpg") jpg
        const extention = path.extname(file.originalname)

        // Pic_1001.jpg
        // conss\t fileName = "Pic"+ "_"+req.user._id + "_" + Date.now()
        const fileName = "Pic" + "_" + req.user._id + extention; cb(null, fileName);
    }
    
})