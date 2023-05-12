const express=require("express")
const router=express.Router()
const {userRegistraion,getUserDetails,updateUserDetails,deleteUser}=require("../controller/userController")


//post the data
router.post("/register",userRegistraion)

//get the user data

router.get("/get/all",getUserDetails)

//updating the user details

router.put("/update/:id",updateUserDetails)

//delete the user details

router.delete("/delete/:studentFirstName",deleteUser)
module.exports =router