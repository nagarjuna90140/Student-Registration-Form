
const userModel=require("../Model/userModel")
const userRegistraion=async(req,res)=>{
const userDetails= new userModel({
   Branch:req.body.Branch,
   studentFirstName:req.body.studentFirstName,
   studentLastName:req.body.studentLastName,
   gender:req.body.gender,
   addmissionYear:req.body.addmissionYear,
   studentclass:req.body.studentclass,
   DateOfBirth:req.body.DateOfBirth,
   secondLanguage:req.body.secondLanguage,
   thirdLanguage:req.body.thirdLanguage,
   guardianFirstName:req.body.guardianFirstName,
   guardianLastName:req.body.guardianLastName,
   mobileNo:req.body.mobileNo,
   emailId:req.body.emailId,
   relationShip:req.body.relationShip,
   pincode:req.body.pincode,
   State:req.body.State,
   District:req.body.District,
   address1:req.body.address1,
   address2:req.body.address2,
   campusTour:req.body.campusTour,
   hearAboutUs:req.body.hearAboutUs,
   AddInfo:req.body.AddInfo
})
try {
    const details=await userDetails.save()
   res.status(201).send({
    success:true,
    message:"registred successfully",
    details
   })
} catch (error) {
    console.log(error)
}

}

//get user data

const getUserDetails=async(req,res)=>{
    const values= await userModel.find({})
    try {
        res.status(201).send({
            success:true,
            message:"user details",
            values
        })
    } catch (error) {
        console.log(error)
    }
}

//updating the user details

const updateUserDetails=async(req,res)=>{
        //    const data=await userModel.findOneAndUpdate({_id:req.params._id},{set:{
        //     Branch:req.body.Branch,
        //     studentFirstName:req.body.studentFirstName,
        //     studentLastName:req.body.studentLastName,
        //     gender:req.body.gender,
        //     addmissionYear:req.body.addmissionYear,
        //     class:req.body.class,
        //     DateOfBirth:req.body.DateOfBirth,
        //     secondLanguage:req.body.secondLanguage,
        //     thirdLanguage:req.body.thirdLanguage,
        //     guardianFirstName:req.body.guardianFirstName,
        //     guardianLastName:req.body.guardianLastName,
        //     mobileNo:req.body.mobileNo,
        //     emailId:req.body.emailId,
        //     relationShip:req.body.relationShip,
        //     pincode:req.body.pincode,
        //     District:req.body.District,
        //     address1:req.body.address1,
        //     address2:req.body.address2,
        //     campusTour:req.body.campusTour,
        //     hearAboutUs:req.body.hearAboutUs,
        //     AddInfo:req.body.AddInfo
        //    }},{new:true})
        //     try {
        //         res.status(201).send({
        //             success:true,
        //             message:"Updated successfully",
        //             data
        //         })
        //     } catch (error) {
        //         console.log(error)
        //     }

    const id=req.params.id;
    const   { Branch, studentLastName,gender,addmissionYear,DateOfBirth,secondLanguage,
        thirdLanguage,guardianFirstName, studentclass,  guardianLastName,  mobileNo,emailId,relationShip,pincode,State,address1,address2,
        campusTour,hearAboutUs,AddInfo,District}=req.body
        if (id.match(/^[0-9a-fA-F]{24}$/)){
            const data=await userModel.findByIdAndUpdate(id,{...req.body},{new:true})
            try {
                res.status(201).send({
                    success:true,
                    message:"Updated successfully",
                    data
                })
            } catch (error) {
                console.log(error)
            }
        }
           
        
  
}

//delete the user

const deleteUser=async(req,res)=>{
const studentFirstName=req.params.studentFirstName
const data=await userModel.findOneAndDelete(studentFirstName)
if(data==null){
    res.send("No data exist")
}else{
    try {
        res.status(201).send({
            success:true,
            message:"successfully deleted"
        })
    } catch (error) {
        
    }
}

}
module.exports={userRegistraion,getUserDetails,updateUserDetails,deleteUser}