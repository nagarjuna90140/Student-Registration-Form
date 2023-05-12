const express=require("express")
const mongoose=require("mongoose")
const user=require("./Router/userRouter")
const app=express()
app.use(express.json())
mongoose.set("strictQuery",true)
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"ArunaProject",

    useNewUrlParser:true

})
app.use("/user",user)
app.listen(9090,()=>{
    console.log("server started running")
})
